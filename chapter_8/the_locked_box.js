var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
  set content(value) {
    this._content.push(value);
  }
}

function withBoxUnlocked(callback) {
  box.unlock();

  try{
    callback("My content");
    console.log(box.content);
  }catch(e) {
    console.log(e.message);
  }finally {
    box.lock();
  }
};

function addContentToBox(content) {
  box.content = content;
};

withBoxUnlocked(addContentToBox);
console.log(box.content); // should raise an exception