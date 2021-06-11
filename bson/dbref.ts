// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any) {
  var o: any = {
    $ref: obj.collection,
    $id: obj.oid
  };
  if (obj.db) o.$db = obj.db;
  o = Object.assign(o, obj.fields);
  return o;
}

function fromExtendedJSON(BSON: any, doc: any) {
  var copy = Object.assign({}, doc);
  ['$ref', '$id', '$db'].forEach(k => delete copy[k]);
  return new BSON.DBRef(doc.$ref, doc.$id, doc.$db, copy);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}