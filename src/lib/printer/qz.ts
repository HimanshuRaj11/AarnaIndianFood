// import qz from "qz-tray";

// /**
//  * Checks if the QZ Tray WebSocket connection is currently active.
//  */
// export function isPrinterConnected(): boolean {
//   if (typeof window === "undefined") return false;
//   try {
//     return qz.websocket.isActive();
//   } catch {
//     return false;
//   }
// }

// /**
//  * Connects to the local QZ Tray desktop client via WebSocket.
//  * Returns true if connection is active/successful, false otherwise.
//  */
// export async function connectPrinter(): Promise<boolean> {
//   if (typeof window === "undefined") return false;

//   try {
//     qz.printers.find()
//       .then(console.log)
//       .catch(console.error);
//     if (qz.websocket.isActive()) {
//       return true;
//     }

//     await qz.websocket.connect({ retries: 1, delay: 1 });
//     return qz.websocket.isActive();
//   } catch (err) {
//     console.warn("QZ Tray Connection Notice: Desktop service is not running or unreachable.", err);
//     return false;
//   }
// }

// /**
//  * Disconnects from QZ Tray WebSocket.
//  */
// export async function disconnectPrinter(): Promise<void> {
//   if (typeof window === "undefined") return;

//   try {
//     if (qz.websocket.isActive()) {
//       await qz.websocket.disconnect();
//     }
//   } catch (err) {
//     console.warn("QZ Tray Disconnect Notice:", err);
//   }
// }

// /**
//  * Fetches the list of all available printers detected by QZ Tray on this machine.
//  */
// export async function getAvailablePrinters(): Promise<string[]> {
//   const connected = await connectPrinter();
//   if (!connected) return [];

//   try {
//     const list = await qz.printers.find();
//     if (Array.isArray(list)) {
//       return list;
//     } else if (typeof list === "string") {
//       return [list];
//     }
//     return [];
//   } catch (err) {
//     console.error("Failed to fetch printers from QZ Tray:", err);
//     return [];
//   }
// }


import qz from "qz-tray";

let connectionPromise: Promise<boolean> | null = null;

/**
 * Checks whether QZ Tray is connected.
 */
export function isPrinterConnected(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return qz.websocket.isActive();
  } catch {
    return false;
  }
}

/**
 * Connects to QZ Tray.
 * Prevents simultaneous connection attempts.
 */
export async function connectPrinter(): Promise<boolean> {
  if (typeof window === "undefined") return false;

  if (qz.websocket.isActive()) {
    return true;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = (async () => {
    try {
      await qz.websocket.connect({
        retries: 1,
        delay: 1,
      });

      return qz.websocket.isActive();
    } catch (err) {
      console.warn(
        "QZ Tray connection failed:",
        err
      );
      return false;
    } finally {
      connectionPromise = null;
    }
  })();

  return connectionPromise;
}

/**
 * Disconnects from QZ Tray.
 */
export async function disconnectPrinter(): Promise<void> {
  if (typeof window === "undefined") return;

  try {
    if (qz.websocket.isActive()) {
      await qz.websocket.disconnect();
    }
  } catch (err) {
    console.warn("QZ Tray disconnect error:", err);
  }
}

/**
 * Fetches available printers.
 */
export async function getAvailablePrinters(): Promise<string[]> {
  const connected = await connectPrinter();

  if (!connected) {
    console.error("QZ Tray is not connected.");
    return [];
  }

  try {
    // Ensure the connection is still active.
    if (!qz.websocket.isActive()) {
      throw new Error("QZ Tray disconnected before printer discovery.");
    }

    const printers = await qz.printers.find();

    console.log("Available QZ Tray printers:", printers);

    return Array.isArray(printers)
      ? printers
      : typeof printers === "string"
        ? [printers]
        : [];
  } catch (err) {
    console.error(
      "Failed to fetch printers from QZ Tray:",
      err
    );
    return [];
  }
}

/**
 * Fetches detailed metadata for all available printers from QZ Tray.
 */
export async function getPrinterDetails(): Promise<any[]> {
  const connected = await connectPrinter();

  if (!connected) {
    console.error("QZ Tray is not connected.");
    return [];
  }

  try {
    if (!qz.websocket.isActive()) {
      throw new Error("QZ Tray disconnected before printer discovery.");
    }

    const details = await qz.printers.details();
    return Array.isArray(details) ? details : details ? [details] : [];
  } catch (err) {
    console.error("Failed to fetch printer details from QZ Tray:", err);
    return [];
  }
}