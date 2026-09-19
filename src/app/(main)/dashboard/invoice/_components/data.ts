import { addDays, format } from "date-fns";

export interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface InvoiceTaxOption {
  id: string;
  name: string;
  rate: number;
}

export type InvoiceDiscountType = "fixed" | "percent";

export const INVOICE_PAPER_WIDTH = 816;
export const INVOICE_PAPER_HEIGHT = 1056;
export const INVOICE_PAPER_SCALE = 0.6;

export interface InvoiceFromDetails {
  name: string;
  email: string;
  phone: string;
  website: string;
  addressLines: string[];
  taxId: string;
  paymentAccountName: string;
  routingNumber: string;
  issuerName: string;
}

export interface InvoiceToDetails {
  id: string;
  name: string;
  email: string;
  addressLines: string[];
  taxId: string;
}

export interface InvoiceFormValues {
  referenceNumber: string;
  issuedDate: string;
  paymentDueDate: string;
  from: InvoiceFromDetails;
  to: InvoiceToDetails;
  taxId: string;
  discountType: InvoiceDiscountType;
  discountValue: number;
  items: InvoiceLineItem[];
}

const today = new Date();

export const defaultInvoiceValues: InvoiceFormValues = {
  referenceNumber: "INV-0425",
  issuedDate: format(today, "yyyy-MM-dd"),
  paymentDueDate: format(addDays(today, 14), "yyyy-MM-dd"),
  from: {
    name: "Swish",
    email: "billing@swish.clean",
    phone: "+1-415-555-0199",
    website: "swish.clean",
    addressLines: ["120 Clean Street", "San Francisco, CA 94107"],
    taxId: "SW-1029384756",
    paymentAccountName: "Swish Operating",
    routingNumber: "121000248",
    issuerName: "Swish Operations",
  },
  to: {
    id: "maria-lopez",
    name: "Maria Lopez",
    email: "maria.lopez@email.com",
    addressLines: ["214 Harborview Ave", "San Francisco, CA 94158"],
    taxId: "",
  },
  taxId: "none",
  discountType: "fixed",
  discountValue: 0,
  items: [
    {
      id: "windows",
      description: "Interior & exterior window washing",
      quantity: 18,
      unitPrice: 12,
    },
    {
      id: "screens",
      description: "Screen cleaning",
      quantity: 8,
      unitPrice: 6,
    },
    {
      id: "tracks",
      description: "Track & sill detailing",
      quantity: 1,
      unitPrice: 45,
    },
  ],
};

export const defaultEstimateValues: InvoiceFormValues = {
  ...defaultInvoiceValues,
  referenceNumber: "EST-309",
  paymentDueDate: format(addDays(today, 14), "yyyy-MM-dd"),
  items: [
    {
      id: "windows",
      description: "Interior & exterior window washing",
      quantity: 22,
      unitPrice: 12,
    },
    {
      id: "exterior",
      description: "House exterior soft wash",
      quantity: 1,
      unitPrice: 280,
    },
    {
      id: "gutters",
      description: "Gutter clearing (optional add-on)",
      quantity: 1,
      unitPrice: 120,
    },
  ],
};

export const invoiceTaxOptions: InvoiceTaxOption[] = [
  {
    id: "gst",
    name: "GST",
    rate: 18,
  },
  {
    id: "vat",
    name: "VAT",
    rate: 12,
  },
  {
    id: "service-tax",
    name: "Service Tax",
    rate: 10,
  },
  {
    id: "none",
    name: "No Tax",
    rate: 0,
  },
];

export const invoiceClients: InvoiceToDetails[] = [
  defaultInvoiceValues.to,
  {
    id: "cedar-ridge-hoa",
    name: "Cedar Ridge HOA",
    email: "board@cedarridgehoa.com",
    addressLines: ["12 Cedar Ridge Loop", "Oakland, CA 94611"],
    taxId: "",
  },
  {
    id: "brightline-offices",
    name: "Brightline Offices",
    email: "facilities@brightline.co",
    addressLines: ["400 Market St, Suite 200", "San Francisco, CA 94105"],
    taxId: "",
  },
  {
    id: "lakeside-cafe",
    name: "Lakeside Cafe",
    email: "hello@lakesidecafe.com",
    addressLines: ["5 Lakeside Drive", "San Mateo, CA 94403"],
    taxId: "",
  },
];

export function getLineAmount(item?: InvoiceLineItem) {
  if (!item) return 0;

  const quantity = Number.isFinite(item.quantity) ? item.quantity : 0;
  const unitPrice = Number.isFinite(item.unitPrice) ? item.unitPrice : 0;

  return quantity * unitPrice;
}

export function getInvoiceItems(invoice: InvoiceFormValues) {
  return invoice.items;
}

export function getInvoiceSubtotal(invoice: InvoiceFormValues) {
  return getInvoiceItems(invoice).reduce((subtotal, item) => subtotal + getLineAmount(item), 0);
}

export function getInvoiceTaxOption(invoice: InvoiceFormValues) {
  return invoiceTaxOptions.find((taxOption) => taxOption.id === invoice.taxId) ?? invoiceTaxOptions[0];
}

export function getInvoiceTax(invoice: InvoiceFormValues) {
  const taxRate = getInvoiceTaxOption(invoice).rate;

  return Math.max(getInvoiceSubtotal(invoice) - getInvoiceDiscount(invoice), 0) * (taxRate / 100);
}

export function getInvoiceDiscount(invoice: InvoiceFormValues) {
  const subtotal = getInvoiceSubtotal(invoice);
  const discountValue = Number.isFinite(invoice.discountValue) ? invoice.discountValue : 0;
  const discount = invoice.discountType === "percent" ? subtotal * (discountValue / 100) : discountValue;

  return Math.min(Math.max(discount, 0), subtotal);
}

export function getInvoiceTotal(invoice: InvoiceFormValues) {
  return Math.max(getInvoiceSubtotal(invoice) - getInvoiceDiscount(invoice), 0) + getInvoiceTax(invoice);
}
