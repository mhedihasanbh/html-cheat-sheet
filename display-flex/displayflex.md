<p>flex-direction: row | row-reverse | column | column-reverse;</p>

<p>flex-wrap: nowrap | wrap | wrap-reverse;</p>

<p> flex-flow: column wrap;</p>

<p> justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;</p>

<p>align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;</p>

<p>align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;</p>

  flex-wrap:row wrap
  flex-grow:1;
  flex-flow:row wrap;

  আইটেম এ কোনো জাইগা গ্যাপ বা খালি থাকলে flexgrow  ১ দিলে এইটা ফিল up করে নেই 
  
  align-self:center; যে আইটেম এ এইটা কল করবে ওনলি সেই আইটেম টা সেন্টার এ যাবে 
  align-self:flex-end;

parent-box>*{
 flex-basis:100%;
}

flex:1 এইটা কলাম এর width  মতো কাজ করে এইটা দিয়া সহজে লেআউট তৈরি করা যায় 
 parent-box>* এইটা কলাম এর মতো কাজ করে যত গুলো div তা অটোমেটিক সাইজ নিয়ে নিবে 

.child1{
  flex:1;
}
.child2{
  flex:3;
}

order:1
order:2

যার অর্ডার কম সে আগে শো করবে আর যাদের অর্ডার বেশি সে পরে শো করবে 
flex-basis:100px;

এইটা রেস্পন্সিভ এর জন্য ঠিকমতো কাজ করে যে পরিমান width নেওয়ার কথা টিক সেই পরিমান width এ নেই এইটা 

.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}


<p>diplay:flex </p>
output:

![profile](./image/display-flex-1.png)

<p>flex-direction:row-reverse</p>

![profile](./image/row-reverse.png)
<p>flex-direction:column-reverse</p>

![profile](./image/colum-reverse.png)

<p>flex-wrap:wrap</p>

![profile](./image/wrap.png)

<p>justify-content:flex-end</p>

![profile](./image/flex-end.png)

<p>justify-content:center</p>

![profile](./image/justify-content-center.png)

<p>justify-content:space-around</p>

![profile](./image/space-around.png)

<p>justify-content:space-btween</p>

![profile](./image/space-between.png)

<p>justify-content:space-evenly</p>

![profile](./image/space-evenly.png)

<p>align-items::stretch</p>

![profile](./image/item-stretch.png)

<p>align-items::flex-end</p>

![profile](./image/item-flex-end.png)

<p>align-items::center</p>

![profile](./image/item-center.png)




