// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any) {
  if (obj.scope) return { $code: obj.code, $scope: obj.scope };
  return { $code: obj.code };
}

function fromExtendedJSON(BSON: any, doc: any) {
  return new BSON.Code(doc.$code, doc.$scope);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}