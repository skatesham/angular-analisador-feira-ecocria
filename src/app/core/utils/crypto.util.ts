import CryptoJS from 'crypto-js';

export function hashSHA256(value: string): string {
  return CryptoJS.SHA256(value).toString();
}

export function hashMD5(value: string): string {
  return CryptoJS.MD5(value).toString();
}

export function encryptAES(value: string, secret: string): string {
  return CryptoJS.AES.encrypt(value, secret).toString();
}

export function decryptAES(encrypted: string, secret: string): string {
  const bytes = CryptoJS.AES.decrypt(encrypted, secret);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function encodeBase64(value: string): string {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(value));
}

export function decodeBase64(encoded: string): string {
  return CryptoJS.enc.Base64.parse(encoded).toString(CryptoJS.enc.Utf8);
}
