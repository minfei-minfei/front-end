self.onmessage = function(e){
    e.data += 'world';//不能改变data，只能在发送数据的时候附加？？？
    self.postMessage(e.data + ' world');
};
