const filters = [
  { id: 1, name: "Service", value: "SERVICE" },
  { id: 2, name: "Api Operation", value: "API_OPERATION" },
  { id: 3, name: "Usage Type", value: "USAGE_TYPE" },
  { id: 4, name: "Instace Type", value: "INSTANCE_TYPE" },
  { id: 5, name: "Platform", value: "PLATFORM" },
  { id: 6, name: "Region", value: "REGION" },
  { id: 7, name: "Usage Type Group", value: "USAGE_TYPE_GROUP" },
  { id: 8, name: "Purchase Option", value: "PURCHASE_OPTION" },
  { id: 9, name: "Resource", value: "RESOURCE" },
  { id: 10, name: "Availability Zone", value: "AVAILABILITY_ZONE" },
  { id: 11, name: "Tenancy", value: "TENANCY" },
  { id: 12, name: "Legal Entity", value: "LEGAL_ENTITY" },
  { id: 13, name: "Billing Entity", value: "BILLING_ENTITY" },
];
const arr = ["mscolumn2d", "msline", "stackedcolumn2d"];


const emptyChartData = {
  chart: {
    caption: "",
    subCaption: "",
    xAxisName: "",
    yAxisName: "",
    numberPrefix: "$",
    theme: "fusion",
    showValues: "0"
  },
  categories: [{
    category: []
  }],
  dataset: []
};

export { filters ,arr ,emptyChartData};