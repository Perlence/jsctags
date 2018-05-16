// Based on DoctorJS (https://github.com/drudge/doctorjs/blob/node/jsctags/ctags/writer.js)

var fs = require('fs');
var isArray = require('lodash.isarray');

var ESCAPES = {
  '\\': '\\\\',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t'
};

var SPECIAL_FIELDS = {
  addr: true,
  lineno: true,
  kind: true,
  name: true,
  tagfile: true,
  origin: true,
  id: true,
  parent: true
};

var convert = module.exports = function(tags) {
  return tags.map(function(tag) {
    if (isArray(tag)) {
      return convert(tag);
    }

    var buf = [tag.name, '\t', tags.tagfile, '\t'];
    var addr;
    if (tag.lineno !== undefined) {
      if (tag.tagfile !== undefined) {
        var lines = cachedReadLinesSync(tag.tagfile);
        var line = lines[tag.lineno - 1];
        addr = `/^${line}$/`;
      } else {
        addr = tag.lineno;
      }
    } else if (tag.addr !== undefined) {
      addr = tag.addr;
    } else {
      addr = '//';
    }
    buf.push(addr);
    var tagfields = [];

    Object.keys(tag).forEach(function(key) {
      if (!SPECIAL_FIELDS[key]) {
        tagfields.push(key);
      }
    });

    tagfields.sort();

    if (tag.kind === undefined && tagfields.length === 0) {
      buf.push('\n');
      return buf.join('');
    }

    buf.push(';\"');

    if (tag.kind !== undefined) buf.push('\t', tag.kind);

    tagfields.forEach(function(tagfield) {
      if (!tag[tagfield]) {
        return;
      }

      if (typeof tag[tagfield] !== 'string') {
        tag[tagfield] = tag[tagfield].toString();
      }

      buf.push('\t', tagfield, ':');
      buf.push(tag[tagfield].replace('[\\\n\r\t]', function(str) {
        return ESCAPES[str];
      }));
    });

    buf.push('\n');
    return buf.join('');
  });
};

function cachedReadLinesSync(path) {
  var result = cachedReadLinesSync.__cache[path];
  if (result === undefined) {
    var contents = fs.readFileSync(path, { encoding: 'utf-8' });
    result = cachedReadLinesSync.__cache[path] = contents.split('\n');
  }
  return result;
}
cachedReadLinesSync.__cache = {};
