self.onmessage = function(e){
    e.data += 'world';//���ܸı�data��ֻ���ڷ������ݵ�ʱ�򸽼ӣ�����
    self.postMessage(e.data + ' world');
};
