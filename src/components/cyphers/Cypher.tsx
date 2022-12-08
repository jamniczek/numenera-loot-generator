import { Text, View } from "@react-pdf/renderer";

import { getRandomUpTo, rollD6, rollD100, getMapValue } from "../../utils";
import { customEffectsMap } from "../../cyphers/templates";
import { styles } from "./styles";

import { AvailableCypherType, Cypher, CypherTemplate } from "../../cyphers/types";

const getCypherEffect = (model: CypherTemplate, effectsMap: Record<string, Record<string, string>>): string => {
  const { name, effect } = model;
  if (effect) {
    return effect;
  }
  const selectedCypherEffectMap = effectsMap[name];
  const customEffect = getMapValue(rollD100(), selectedCypherEffectMap);
  // console.log({ selectedCypherEffectMap, effectsMap, name, customEffect });

  return selectedCypherEffectMap.base + customEffect;
};

const getCypherType = (types: AvailableCypherType[]): AvailableCypherType => {
  return types[getRandomUpTo(types.length)];
};

const generateCypherModel = (template: CypherTemplate): Cypher => {
  const { name, levelOffset, effect, availableTypes } = template;
  const { type, form } = getCypherType(availableTypes);

  return {
    name,
    level: rollD6(levelOffset),
    effect: getCypherEffect(template, customEffectsMap),
    [type]: form,
  };
};

interface ICypherComponentProps {
  template: CypherTemplate;
}

export const CypherComponent = ({ template }: ICypherComponentProps): JSX.Element => {
  const cypherModel = generateCypherModel(template);
  return (
    <View style={styles.cypherContainer} wrap={false}>
      <View style={styles.cypherSection}>
        <Text style={styles.cypherLabelColumn}>Name:</Text>
        <Text style={styles.cypherContentColumn} wrap>
          {cypherModel.name}
        </Text>
      </View>
      <View style={styles.cypherSection}>
        <Text style={styles.cypherLabelColumn}>Level:</Text>
        <Text style={styles.cypherContentColumn} wrap>
          {cypherModel.level}
        </Text>
      </View>
      {cypherModel.internal && (
        <View style={styles.cypherSection}>
          <Text style={styles.cypherLabelColumn}>Internal:</Text>
          <Text style={styles.cypherContentColumn} wrap>
            {cypherModel.internal}
          </Text>
        </View>
      )}
      {cypherModel.usable && (
        <View style={styles.cypherSection}>
          <Text style={styles.cypherLabelColumn}>Usable:</Text>
          <Text style={styles.cypherContentColumn} wrap>
            {cypherModel.usable}
          </Text>
        </View>
      )}
      {cypherModel.wearable && (
        <View style={styles.cypherSection}>
          <Text style={styles.cypherLabelColumn}>Wearable:</Text>
          <Text style={styles.cypherContentColumn} wrap>
            {cypherModel.wearable}
          </Text>
        </View>
      )}
      {cypherModel.effect && (
        <View style={styles.cypherSection}>
          <Text style={styles.cypherLabelColumn}>Effect:</Text>
          <Text style={styles.cypherContentColumn} wrap>
            {cypherModel.effect}
          </Text>
        </View>
      )}
    </View>
  );
};
