import qz from "qz-tray";

/**
 * Checks if the QZ Tray WebSocket connection is currently active.
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
 * Connects to the local QZ Tray desktop client via WebSocket.
 * Returns true if connection is active/successful, false otherwise.
 */
export async function connectPrinter(): Promise<boolean> {
  if (typeof window === "undefined") return false;

  try {
    if (qz.websocket.isActive()) {
      return true;
    }

    await qz.websocket.connect({ retries: 1, delay: 1 });
    return qz.websocket.isActive();
  } catch (err) {
    console.warn("QZ Tray Connection Notice: Desktop service is not running or unreachable.", err);
    return false;
  }
}

/**
 * Disconnects from QZ Tray WebSocket.
 */
export async function disconnectPrinter(): Promise<void> {
  if (typeof window === "undefined") return;

  try {
    if (qz.websocket.isActive()) {
      await qz.websocket.disconnect();
    }
  } catch (err) {
    console.warn("QZ Tray Disconnect Notice:", err);
  }
}

/**
 * Fetches the list of all available printers detected by QZ Tray on this machine.
 */
export async function getAvailablePrinters(): Promise<string[]> {
  const connected = await connectPrinter();
  if (!connected) return [];

  try {
    const list = await qz.printers.find();
    if (Array.isArray(list)) {
      return list;
    } else if (typeof list === "string") {
      return [list];
    }
    return [];
  } catch (err) {
    console.error("Failed to fetch printers from QZ Tray:", err);
    return [];
  }
}