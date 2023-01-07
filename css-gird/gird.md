<style>
    diplay:gird;
    gird-template-columns:200px 200px 100px;
    gird-template-rows:200px 200px 100px;
    gird-row-gap:2px;
    gird-colum-gap:3px;
    gird-gap:5px;
    gird-template-columns:1fr 2fr;

</style>
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<h2>gird-template-columns:200px 200px 100px;</h2>
<p>gird-template-columns আমারে যে কয় টা কলাম এর সাইজ বলে দিবো সেই কয়টা কলাম শো করবে </p>
output:

![profile](./image/colum-grid.png)

<h2>gird-gap:</h2>  row এবং কলাম এর মাঝে সমান পরিমান গ্যাপ দিবে
<h2>gird-template-columns:1fr 2fr;</h2>
এইটা বুটস্ট্র্যাপ এর কলাম মতো কাজ করে 

![profile](./image/columfr.png)

<h2>gird-template-rows:2fr 3fr;</h2>
এইটা row বরাবর কাজ করে প্রথম ২ টা row ডিক্লেয়ার করে দিছি বাকি টা অটোমেটিক নিয়ে নিচে  

![profile](./image/row.png)
<h2>gird-template:repeat(3,1fr)/repeat(3,1fr)</h2>
সমান row এবং কলাম নিয়ে কাজ করার জন্য এইভাবে লেখা যায়। প্রথম টি row হিসাবে কাজ করে দ্বিতীয় টি কলাম হিসাবে কাজ করে 

![profile](./image/repeat.png)
