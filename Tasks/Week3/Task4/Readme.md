ما هي الميزات الجديدة التي قدمتها (6ES (2015 ECMAScript في لغة JavaScript؟ قم
بذكر أكبر عدد ممكن من هذه الميزات مع شرح موجز لكل ميزة.

let و const: تعريف المتغيرات بنطاق محلي.
Arrow Functions: دوال مختصرة بنطاق ثابت .
Classes: تعريف الكائنات والدوال البانية.
Template Literals: بناء النصوص باستخدام ${}.
Default Parameters: قيم افتراضية للمعاملات في الدوال.
Destructuring: استخراج القيم من المصفوفات والكائنات.
Modules: تقسيم الكود واستيراد/تصدير الوحدات البرمجية.
for...of: تكرار العناصر في المجموعات.

كيف يمكنك جلب البيانات من API بطرق مختلفة في JavaScript؟ اشرح ثالثة طرق مختلفة
مع ذكر مثال لكل طريقة
1-Fetch
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  2-XMLHttpRequest
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed with status: ' + xhr.status);
  }
};
xhr.onerror = function () {
  console.error('Request failed');
};
xhr.send();

3-async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
