type RandomNumberType = {
  value: number;
};

// Means positive number will all properties of RandomNumberType as well as isPositive
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
}

export default RandomNumber;
