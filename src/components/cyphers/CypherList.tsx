import { Document, Page, View } from "@react-pdf/renderer";

import { CypherTemplate } from "../../cyphers/types";
import { CypherComponent } from "./Cypher";
import { styles } from "./styles";

interface ICypherListProps {
  templates: CypherTemplate[];
}

export const CypherList = ({ templates }: ICypherListProps): JSX.Element => {
  const leftColCyphers: CypherTemplate[] = templates.filter((template, index) => index % 2 !== 0);
  const rightColCyphers: CypherTemplate[] = templates.filter((template, index) => index % 2 === 0);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.column}>
          {leftColCyphers.map((template, index) => (
            <CypherComponent template={template} key={`${template.name}-${index}`} />
          ))}
        </View>
        <View style={styles.column}>
          {rightColCyphers.map((template, index) => (
            <CypherComponent template={template} key={`${template.name}-${index}`} />
          ))}
        </View>
      </Page>
    </Document>
  );
};
