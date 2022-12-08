type CypherType = 'internal' | 'wearable' | 'usable';
export type AvailableCypherType = { type: CypherType; form: string };

export type CypherTemplate = {
  name: string;
  levelOffset: number;
  effect: string | null;
  availableTypes: AvailableCypherType[];
};

export type Cypher = {
  name: string;
  level: number;
  effect: string | null;
  internal?: string;
  wearable?: string;
  usable?: string;
};
