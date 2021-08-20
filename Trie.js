/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.map = {};
  this.isWord = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = new Trie();
  let ch = word.charAt(0);
  this.map[ch] = this.map[ch] || node;
  if (word.length === 1) this.map[ch].isWord = true;
  else this.map[ch].insert(word.substr(1));
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (word.length === 1 && this.map[word] && this.map[word].isWord) return true;
  let child = this.map[word.charAt(0)];
  if (child) return child.search(word.substr(1));
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (prefix.length === 1 && this.map[prefix]) return true;
  let child = this.map[prefix.charAt(0)];
  if (child) return child.startsWith(prefix.substr(1));
  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
