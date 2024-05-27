type IAttributeValue = {
  attributeId?: string;
  value: string;
};

export type IAttribute = {
  name: string;
  is_active?: boolean;
  attributeValue: IAttributeValue[];
};
