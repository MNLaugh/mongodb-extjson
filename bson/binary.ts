// deno-lint-ignore-file no-explicit-any
import {
  decode,
  encode,
} from "https://deno.land/std@0.98.0/encoding/base64.ts";

function convert(integer: any) {
  var str = Number(integer).toString(16);
  return str.length === 1 ? '0' + str : str;
}

function toExtendedJSON(obj: any) {
  var base64String = encode(obj.buffer);
  return {
    $binary: {
      base64: base64String,
      subType: convert(obj.sub_type)
    }
  };
}

function fromExtendedJSON(BSON: any, doc: any) {
  var type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
  var data = decode(doc.$binary.base64);
  return new BSON.Binary(data, type);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}