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
      document.getElementsByClassName("woocommerce-order-overview__order order")
    );
    if (_orderIdEls.length) {
      ret = _orderIdEls[0].textContent ?? "";
    }
  }
  if (!ret) {
    const _orderIdEls = Array.from(
      document.getElementsByClassName("woocommerce-order-details__order-order")
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
      document.getElementsByClassName("woocommerce-Price-amount amount")
    );
    if (_totalEls.length) {
      ret = _totalEls[0].textContent ?? "";
    }
  }
  return parseFloat(_strParser(_parseDigits(ret)));
};

const init = async (orderId = "", amount = 0) => {
  try {
    if (!orderId) throw new Error("No orderId provided");
    if (amount <= 0) throw new Error("Amount must be greater than 0");

    const config = window.IBAN_QR_CONFIG;
    if (!config) {
      alert("[IBAN_QR] no config provided.");
      return;
    }

    if (!config.id) throw new Error("No id provided in config");

    const r = await fetch(
      `https://metorikclone.vercel.app/api/callback/iban/getIban?id=${config.id}`
    );
    const data = await r.json();
    if (!r.ok) return;

    const { name, iban, bic, showDetails } = data;

    const qrData = generateQrCode({
      name,
      iban,
      bic,
      amount,
      information: orderId,
    });

    const el = document.querySelector("#iban-qr");
    if (el.tagName === "img") {
      el.src = await qr.toDataURL(qrData);
    } else {
      const container = document.createElement("div");
      container.id = "iban-qr-container";
      container.style.display = "flex";
      container.style.alignItems = "flex-start";
      container.style.gap = "1.5em";
      container.style.flexWrap = "wrap";

      const qr = document.createElement("img");
      qr.src = await qr.toDataURL(qrData);
      container.appendChild(qr);

      if (showDetails) {
        const details = document.createElement("p");
        details.innerHTML = `
  Naam: 
  <b>${name}</b>
  <br />
  IBAN:
  <b>${iban}</b>
  <br />
  Bedrag:
  <b>€${amount.toFixed(2)}</b>
  <br />
  Omschrijving:
  <b>${orderId}</b>
`;
        container.appendChild(details);
      }

      el.appendChild(container);
    }
  } catch (err) {
    console.error(
      "[IBAN_QR]",
      err.message,
      "\n\n",
      "orderId:",
      orderId,
      "\n\n",
      "amount:",
      amount
    );
  }
};
init(_getOrderId(), _getTotal());
