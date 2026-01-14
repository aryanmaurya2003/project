import iamRole from "../../assets/iamrole.png";
const onboardingSteps = [
  {
    id: 1,
    description: [
      { type: "text", value: "Go to " },
      { type: "link", value: "Create policy ", link: "#" },
      { type: "text", value: "page" },
    ],
  },
  {
    id: 2,
    description: [
      {
        type: "text",
        value:
          "Click on the JSON tab and paste the policy below, then click on Next:",
      },
    ],
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 3,
    description: [
      {
        type: "text",
        value:
          "In the name field, enter the policy name below and click Create Policy:",
      },
    ],
    codeBlock1: `cktuner-CostAuditPolicy`,
  },
  {
    id: 4,
    description: [
      { type: "text", value: "Again, go to the  " },
      { type: "link", value: "Create policy ", link: "#" },
      { type: "text", value: " page" },
    ],
  },
  {
    id: 5,
    description:
      "Click on the json Tab and paste the following policy and click on the next:",
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 6,
    description:
      "In the main field , enter below mentioned policy name and click on Create Policy",
    codeBlock1: `cktuner-SecAuditPolicy`,
  },
  {
    id: 7,
    description: [
      { type: "text", value: "Again, go to the  " },
      { type: "link", value: "Create policy ", link: "#" },
      { type: "text", value: " page" },
    ],
  },
  {
    id: 8,
    description:
      "Click on the json Tab and paste the following policy and click on the next:",
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 9,
    description: [
      {
        type: "text",
        value:
          "In the name field, enter the policy name below and click Create Policy:",
      },
    ],
    codeBlock1: `cktuner-TunerReadEssentials`,
  },
  {
    id: 10,
    description: [
      { type: "text", value: "Go to " },
      { type: "link", value: "CK-Tuner-Role ", link: "#" },
    ],
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 11,
    description:
      "In permissioin policies, Click on Add permision > Attack Policies",
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 12,
    description:
      "Filter by type > Customer managed then search for cktuner-costAuditPolicy,ckTuner-SecAuditPolicy,cktuner-TunerReadEssential and select them",
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 13,
    description: [
      { type: "text", value: "Now, " },
      { type: "text", value: "Click on Add Permission " },
    ],
  },
  {
    id: 14,
    description: [
      { type: "text", value: "In permission Policies, Click on " },
      { type: "text", value: " Add Permission > Create Inline Policy " },
    ],
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 15,
    description: "Click on the json Tab and paste the following policy ",
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 16,
    description: [
      { type: "text", value: "Now, " },
      { type: "text", value: "Click on Review Policy " },
    ],
  },
  {
    id: 17,
    description: [
      {
        type: "text",
        value:
          "In the Name field, enter the below mentioned policy name and click on ",
      },
      { type: "text", value: "Create policy " },
    ],
  },
];

const onboardingSteps1 = [
  {
    id: 1,
    description: "Access the AWS console and create an IAM role.",
    linkText: "Create an IAM role",
    link: "#",
  },
  {
    id: 2,
    description:
      "In the Trusted entity type section, select Custom trust policy and replace with policy provided below.",
    codeBlock: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:role/ck-tuner-nonprod-transitive-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "MU1HX0RFRkFVTFQwMzM5NTZlYS1kMDE3LTRjYmQtYjY3ZS1jMGI4NWJjY2U4Yzk="
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}`,
  },
  {
    id: 3,
    description:
      "Click on Next to go to the Add permissions page. We would not be adding any permissions for now because the permission policy content will be dependent on the AWS Account ID retrieved from the IAM Role. Click on Next",
  },
  {
    id: 4,
    description:
      "In the Role name field, enter the below-mentioned role name, and click on Create Role",
    codeBlock1: `CK-Tuner-Role-Dev2`,
    message: "Click anywhere in the box to copy the content inside",
  },
  {
    id: 5,
    description: "Go to the newely created IAM role and copy the Role ARN- ",
    image: iamRole,
    alt: "Error in loading image",
  },
  {id: 6,
    description: "Paste the copied row ARN below",
     inputBox: true,
    inputArray:[{
    id: 15,
    inputBox: true,
    placeholder: "Enter aws id",
    name: "awsId",
  },
  {
    id: 7,
    inputBox: true,
    placeholder: "Enter account name",
    name: "accountName",
  },
  {
    id: 8,
    inputBox: true,
    placeholder: "Enter the IAM role ARN",
    name: "arnName",
  },]
  },
 
];
const onboardingSteps3 = [
  {
    id: 1,
    description: [
      { type: "text", value: "Go to " },
      { type: "link", value: "S3 Console ", link: "#" },
      { type: "text", value: "and click Create bucket" },
    ],
    image: iamRole,
    alt: "S3 Console Screenshot",
  },
  {
    id: 2,
    description: "Enter the bucket name as shown below:",
    codeBlock1: `ck-tuner-bucket-${Date.now()}`,
    message: "Click anywhere in the box to copy the bucket name",
  },
  {
    id: 3,
    description: "Configure bucket settings with the following JSON policy:",
    codeBlock: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudKeeperAccess",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:root"
      },
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}`,
  },
  {
    id: 4,
    description: "Enable versioning and server-side encryption for the bucket.",
    image: iamRole,
    alt: "Bucket settings screenshot",
  },
  {
    id: 5,
    description: [
      { type: "text", value: "Click " },
      { type: "text", value: "Create bucket " },
      { type: "text", value: "to complete the setup" },
    ],
  },
  {
    id: 6,
    description: "Copy the bucket ARN from the bucket properties:",
    image: iamRole,
    alt: "Bucket ARN location",
  },
  {
    id: 7,
    description: "Verify bucket access by uploading a test file.",
    image: iamRole,
    alt: "Upload test file",
  },
];



export {onboardingSteps,onboardingSteps1,onboardingSteps3};