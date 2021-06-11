// deno-lint-ignore-file no-explicit-any
function toExtendedJSON() {
  return { $maxKey: 1 };
}

function fromExtendedJSON(BSON: any) {
  return new BSON.MaxKey();
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}