const generateQrCode = require("sepa-payment-qr-code");
const qr = require("qrcode");

const _parseDigits = (str) => {
  const arr = str?.match(/[\d,.]+/)?.filter((s) => s.trim()) ?? [];
  return arr?.[0] ?? "0";
};

const _strParser = (str) => {
  return (
    str
      ?.replace("Order Number:", "")
      .replace(/(?:\r\n|\r|\n)/g, "")
      .trim() ?? ""
  );
};

const _getOrderId = () => {
  let ret = "";
  if (!ret) {
    const el = document.querySelector("#easycheckout-orderid");
    if (el) {
      ret = el.textContent ?? "";
    }
  }
  if (!ret) {
    const _orderIdEls = Array.from(
      document.getElementsByClassName(
        "woocommerce-order-overview__order order",
      ),
    );
    if (_orderIdEls.length) {
      ret = _orderIdEls[0].textContent ?? "";
    }
  }
  if (!ret) {
    const _orderIdEls = Array.from(
      document.getElementsByClassName("woocommerce-order-details__order-order"),
    );
    if (_orderIdEls.length) {
      ret = _orderIdEls[0].textContent ?? "";
    }
  }
  return _strParser(ret);
};

const _getTotal = () => {
  let ret = "";
  if (!ret) {
    const el = document.querySelector("#easycheckout-total");
    if (el) {
      ret = el.textContent ?? "";
    }
  }
  if (!ret) {
    const _totalEls = Array.from(
      document.getElementsByClassName("woocommerce-Price-amount amount"),
    );
    if (_totalEls.length) {
      ret = _totalEls[0].textContent ?? "";
    }
  }
  return _strParser(_parseDigits(ret));
};

const init = async (orderId = "", amount = 0.0) => {
  try {
    if (!orderId) throw new Error("No orderId provided");
    if (amount <= 0) throw new Error("Amount must be greater than 0");

    const r = await fetch(
      `https://metorikclone.vercel.app/api/callback/iban/getIban?id=656a7eced99b49df3f60ff53`,
    );
    const data = await r.json();
    if (!r.ok) return;

    const { name, iban, bic } = data;

    const qrData = generateQrCode({
      name,
      iban,
      bic,
      amount,
    });

    const el = document.querySelector("#iban-qr");
    if (el.tagName === "img") {
      el.src = await qr.toDataURL(qrData);
    } else {
      const newImg = document.createElement("img");
      newImg.src = await qr.toDataURL(qrData);
      el.appendChild(newImg);
    }
  } catch (err) {
    console.error("[IBAN_QR]", err.message);
  }
};
init(_getOrderId(), _getTotal());
