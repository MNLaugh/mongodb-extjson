// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any) {
  return { $regularExpression: { pattern: obj.pattern, options: obj.options } };
}

function fromExtendedJSON(BSON: any, doc: any) {
  return new BSON.BSONRegExp(
    doc.$regularExpression.pattern,
    doc.$regularExpression.options
      .split('')
      .sort()
      .join('')
  );
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}