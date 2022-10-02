import { Colors, FontFamilies } from "src/theme";

import { TestOutputAriaLabels } from "./TestOutput.ariaLabels";
import { Text } from "@chakra-ui/react";
import { useMemo } from "react";

type Props = {
  passed: boolean;
  output: string;
};

export function TestOutput({ passed, output }: Props): JSX.Element {
  const testOutputColor = useMemo(
    () => (passed ? Colors.PASSED : Colors.FAILED),
    [passed],
  );

  const testOutputBackgroundColor = useMemo(
    () => (passed ? Colors.PASSED_BACKGROUND : Colors.FAILED_BACKGROUND),
    [passed],
  );

  const processedOutput = useMemo(() => {
    return output
      .split("\n")
      .filter((str) => str)
      .map((str, idx) => (
        <>
          <span>{str}</span>
          {idx !== output.length - 1 ? <br /> : null}
        </>
      ));
  }, [output]);

  return (
    <Text
      className="exercise-output-text"
      fontFamily={FontFamilies.MONOSPACE}
      color={testOutputColor}
      backgroundColor={testOutputBackgroundColor}
      aria-label={TestOutputAriaLabels.OUTPUT_TEXT}
    >
      {processedOutput}
    </Text>
  );
}
