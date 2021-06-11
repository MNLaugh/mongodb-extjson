// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any) {
  return {
    $timestamp: {
      t: obj.high,
      i: obj.low
    }
  };
}

function fromExtendedJSON(BSON: any, doc: any) {
  return new BSON.Timestamp(doc.$timestamp.i, doc.$timestamp.t);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}