/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
 String.prototype.trim=function()
{
     return this.replace(/(^\s*)|(\s*$)/g,"");
};

var aqiData = {};

/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData(){
	var city=document.getElementById("aqi-city-input").value.trim();
	var quality=document.getElementById("aqi-value-input").value.trim();
	console.log(city+quality); //���ڵ���
	var re=/^[A-Za-z\u4E00-\u9FA5]+$/;
	var renum=/^[0-9]*[1-9][0-9]*$/g;
	console.log(re.test(city)&&renum.test(quality));
	if(!re.test(city)){
		alert("Please enter right city !");
		document.getElementById("aqi-city-input").focus();
		}
	if(!renum.test(quality)){
		document.getElementById("aqi-value-input").focus();
		alert("Please enter right  qulity number!");	
		}
	aqiData[city]=quality;
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {

}

/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle() {
  // do sth.

  renderAqiList(); 
}

function init() {

  // ���������add-btn��һ������¼������ʱ����addBtnHandle����
  
  // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����

}

init();