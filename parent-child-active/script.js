
    $(function (e) {
        $(".preloader").hide();
        $("body").css("overflow", "scroll");
    });

    $(document).ready(function () {
        $('.js-multiple-select2').select2();
    });

    //Blog Tag
    $(document).ready(function() {
        $(".multi-select").select2({
            placeholder: "Select tag",
            tags: true,
            tokenSeparators: ['/',',',','," "]
        });

        $(function() {

            $('#datePicker').daterangepicker({
                autoUpdateInput: false,
                singleDatePicker: true,
                timePicker: true,
                timePicker24Hour: true,
                locale: {
                    cancelLabel: 'Clear'
                }
            });

            $('#datePicker').on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('YYYY-MM-DD HH:mm'));
            });

            $('#datePicker').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
            });

          });
        $(function() {

            $('.datePicker').daterangepicker({
                autoUpdateInput: false,
                singleDatePicker: true,
                timePicker: true,
                timePicker24Hour: true,
                locale: {
                    cancelLabel: 'Clear'
                }
            });

            $('.datePicker').on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('YYYY-MM-DD HH:mm'));
            });

            $('.datePicker').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
            });

          });
        $(function() {

            $('#pay_datePicker').daterangepicker({
                autoUpdateInput: false,
                singleDatePicker: true,
                timePicker: true,
                timePicker24Hour: true,
                locale: {
                    cancelLabel: 'Clear'
                }
            });

            $('#pay_datePicker').on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('YYYY-MM-DD'));
            });

            $('#pay_datePicker').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
            });

          });

    });
    $(document).ready(function() {
      $('ul.collapse').children('li').each(function(index){
        
        
        $(this).attr('data-aria',$(this).parent().attr('id'));

      })
      
      var parentId = $('.active').data('aria');
      
      $('#'+parentId).addClass('show');
      $('a[href="#'+parentId+'"]').attr('aria-expanded','true');
        $('#Targeting').collapse({toggle: false});



        var countrys = ['Bangladesh','India','usa'];

        var number=0;
        $('#addBank').click(function(){

            number++;
            console.log($("#saveUrlForJs").value);



            var bank = '<form id="newbank'+number+'" action="'+$("#saveUrlForJs").val()+'" method="POST">';
            bank += '<div class="form-row">';
            bank += '<input type="hidden" name="_token" value="'+$('#newbankAdd').val()+'">';
            bank += '<div class="col pr-0 pl-0"><input class="form-control" name="acountName" type="text" placeholder="Acount Name"></div>';
            bank += '<div class="col pr-0 pl-0"><input class="form-control" name="acountNumber" type="text" placeholder="Acount No."></div>';
            bank += '<div class="col pr-0 pl-0"><input class="form-control" name="bankName" type="text" placeholder="Bank name"></div>';
            bank += '<div class="col pr-0 pl-0"><input class="form-control" name="shortCode" type="text"  placeholder="Short code"></div>';
            bank += '<div class="col pr-0 pl-0"><input class="form-control" name="iban" type="text" placeholder="IBAN"></div>';
            bank += '<div class="col pr-0 pl-0"><input class="form-control" name="swift" type="text" placeholder="Swift"></div>';
            bank += '<div class="col pr-0 pl-0"><select class="form-control" name="countrySelect"><option value="Bangladesh" selected>Select a country</option>';
            countrys.forEach(function (item) {
                bank += '<option>'+item+'</option>';
              });

            bank += '</select></div><div class="col pr-0 pl-0"><button type="submit" class="btn btn-sm col-12 py-2 dashboard_btn fw-bold"><i class="fas fa-plus-circle me-2"></i>Save</button></div></div></form>';
            $("#Targeting").append(bank);
        });
        $(document).on('click','.bankstutas',function(){


            $.ajax({
                type: "POST",
                url: $(this).data('url'),
                data: {"_token":$(this).data('token')},
                success: function(d){
                    location.reload();
                }
              });


        });
        $(document).on('click','.invoiceDelete',function(){


            $.ajax({
                type: "DELETE",
                url: $(this).data('url'),
                data: {"_token":$(this).data('token')},
                success: function(d){
                    console.log(d)
                    iziToast.success({
                        title: 'Invoice',
                        message: d
                    });
                    location.reload();
                }
              });


        });

            $(document).on('click','.country_remove_btn',function(){
                $('#rowid'+$(this).data('id')).remove();

            });
            $(document).on('click','.platform_remove_btn',function(){
                $('#pid'+$(this).data('id')).remove();

            });



            $(function () {
                $("#invoiceTableButton").click(function () {
                    var invoice_item = $('#invoice_item').val();
                    var invoice_QTY = $('#invoice_QTY').val();
                    var invoice_Rate = $('#invoice_Rate').val();
                    var invoice_Tax = $('#invoice_Tax').val();
                    var invoice_discript = $('#invoice_discript').val();
                    var price = invoice_Rate*invoice_QTY;
                    var taxParcent = (price/100)*invoice_Tax;
                    var invoice_dolar = price+taxParcent;
                    var rendomnumber = Math.floor(Math.random() * 1000)

                    $("#maintable").append(`
                        <tr>

                            <th scope="col">
                                <span ><textarea name="items[${rendomnumber}][name]" readonly  rows="1" class=" inv_items_input">${invoice_item}</textarea></span>
                                <p class="invoice_table_discrip" ><textarea name="items[${rendomnumber}][description]" readonly rows="1" class=" inv_items_input">${invoice_discript}</textarea></p>
                            </th>
                            <td scope="col" ><textarea  name="items[${rendomnumber}][qty]" readonly rows="1" class="table_input">${invoice_QTY}</textarea></td>
                            <td scope="col" ><textarea name="items[${rendomnumber}][rate]" readonly rows="1" class=" table_input">${invoice_Rate}</textarea></td>
                            <td scope="col" ><textarea name="items[${rendomnumber}][tax]" readonly rows="1" class=" table_input">${invoice_Tax}</textarea></td>
                            <td scope="col" id=""><textarea id="subtotal${rendomnumber}" name="items[${rendomnumber}][dolar]" readonly rows="1" class=" total_input">${invoice_dolar}</textarea></td>
                            <td scope="col" id=""><a href="javascript:void(0);" id="remCF">Remove</a></td>
                        </tr>
                    `)
                    // var value = $('#subtotal').val();
                    // console.log(value)
                    // subtotal
                    var  subtotal_dolar_result= $('#subtotal_dolar_result');
                    subtotal_dolar = price + Number(subtotal_dolar_result.val());
                    subtotal_dolar_result.val(subtotal_dolar);

                    //total
                   var  total_dolar_result= $('#total_dolar_result');
                   total_dolar = invoice_dolar + Number(total_dolar_result.val());
                   total_dolar_result.val(total_dolar);
                    //tax
                   var  tax_result= $('#total_tax_result');
                   tax_dolar = taxParcent + Number(tax_result.val());
                   tax_result.val(tax_dolar);




                   $("#maintable").on('click', '#remCF', function(){
                        var removeitem = $(this).parent().parent();
                        var removeSub = removeitem.find('[id^="subtotal"]').val();
                        console.log(removeSub)

                        // subtotal
                        // var  subtotal_dolar_result= $('#subtotal_dolar_result').val();
                        // console.log(subtotal_dolar_result)
                        // subtotal_dolar = subtotal_dolar_result - removeSub;
                        // subtotal_dolar_result.val(subtotal_dolar);
                        // removeitem.remove();
                   });
               });
            })
            $("#maintable").on('click', '.itemRemove', function(){
                $(this).parent().parent().remove();
                $.ajax({
                    type: "POST",
                    url: $(this).data('url'),
                    data: {"_token": $(this).data('token')},
                    success: function(d){
                        console.log(d)
                        iziToast.success({
                            title: 'Invoice Item',
                            message: d
                        });

                    }
                  });
            });



                $('#discription_btn').click(function(){
                    var discription_result = $('#discription_fild').val();
                        $('#discription_result').text(discription_result)
                });

                $('#addDescription').click(function(){
                    $('.addDescription').addClass('active')
                    $('.companyInfo').removeClass('active')
                });
                // $('#addDescription').click(function(){
                //     $('.addDescription').addClass('active')
                //     $('.companyInfo').removeClass('active')
                // });
                $('#cleint_save_change').click(function(){
                    var cleint_name = $('#cleint_name').val();
                    var first_name = $('#first_name').val();
                    var last_name = $('#last_name').val();
                    var claint_email = $('#claint_email').val();
                    var country_name = $('#country_name').val();
                    var address_one = $('#address_one').val();
                    var address_phone = $('#address_phone').val();
                    var Website = $('#Website').val();
                    $('#cleint_name_result').text(cleint_name)
                    $('#first_name_result').text(first_name)
                    $('#last_name_result').text(last_name)
                    $('#claint_email_result').text(claint_email)
                    $('#country_name_result').text(country_name)
                    $('#address_one_result').text(address_one)
                    $('#address_phone_result').text(address_phone)
                    $('#Website_result').text(Website)
                })
                $('#invoice_discriptions').click(function(){
                    $('.paymentDescription').addClass('active');
                    var payment_DiscriptDetails = $('#payment_DiscriptDetails').val();
                    $('#payment_DiscriptDetails_result').text(payment_DiscriptDetails);
                    var display_DiscriptLocation = $('#display_DiscriptLocation').val();
                    $('#display_DiscriptLocation_result').text(display_DiscriptLocation)
                })
                $('#add_address').click(function(){
                    var address_value = $('#byer_address').val();
                    $('#byer_Address').text(address_value);
                    $('#byer_address').val('');
                })

                // file pay section

                    $('.btn1').on('click', function() {
                      $('.file').trigger('click');
                    });

                    $('.file').on('change', function() {
                      var fileName = $(this)[0].files[0].name;
                      $('#file-name').val(fileName);
                    });

                    //shipping backgroundcolor
                      $('#payment-form-areaOne').click(function () {
                      $('#payment-form-areaOne').addClass('active');
                      $('#payment-form-areaTwo').removeClass('active');
                      $('#payment-form-areaThree').removeClass('active');
                      $('#payment-form-areaFour').removeClass('active');
                      $('#payment-form-areaFive').removeClass('active');
                    });
                     $('#payment-form-areaTwo').click(function () {
                      $('#payment-form-areaTwo').addClass('active');
                      $('#payment-form-areaOne').removeClass('active');
                      $('#payment-form-areaThree').removeClass('active');
                      $('#payment-form-areaFour').removeClass('active');
                      $('#payment-form-areaFive').removeClass('active');
                    });
                    $('#payment-form-areaThree').click(function () {
                      $('#payment-form-areaThree').addClass('active');
                      $('#payment-form-areaOne').removeClass('active');
                      $('#payment-form-areaTwo').removeClass('active');
                      $('#payment-form-areaFour').removeClass('active');
                      $('#payment-form-areaFive').removeClass('active');
                    });
                    $('#payment-form-areaFour').click(function () {
                      $('#payment-form-areaFour').addClass('active');
                      $('#payment-form-areaOne').removeClass('active');
                      $('#payment-form-areaTwo').removeClass('active');
                      $('#payment-form-areaThree').removeClass('active');
                      $('#payment-form-areaFive').removeClass('active');
                    });
                    $('#payment-form-areaFive').click(function () {
                      $('#payment-form-areaFive').addClass('active');
                      $('#payment-form-areaOne').removeClass('active');
                      $('#payment-form-areaTwo').removeClass('active');
                      $('#payment-form-areaThree').removeClass('active');
                      $('#payment-form-areaFour').removeClass('active');
                    });



        });




    // contact page js codding here
    function initMap() {
        const myLatLng = { lat: -25.363, lng: 131.044 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: myLatLng,
        });

        new google.maps.Marker({
          position: myLatLng,
          map,
          title: "Hello World!",
        });
      }

    //   stripe js starts
    const stripe = Stripe($('#stripeinfo').data('pulic_key'));

// The items the customer wants to buy
const items = [{ id: $('#stripeinfo').data('invoice_id') }];

let elements;

initialize();
checkStatus();

document
  .querySelector("#payment-form")
  .addEventListener("submit", handleSubmit);

// Fetches a payment intent and captures the client secret
oderSecret=0;
async function initialize() {
  const { clientSecret } = await fetch($('#stripeinfo').data('intenturl'), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items ,"_token": $('#stripeinfo').data('token'),"amount": $('#stripeinfo').data('amount'),'invoice_id':$('#stripeinfo').data('invoice_id')}),
  }).then((r) => r.json());
  oderSecret = clientSecret
  console.log(clientSecret);

  elements = stripe.elements({ clientSecret });

  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
}

async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
    var return_url= $('#stripeinfo').data('verifyurl');
    console.log(return_url);
  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      // Make sure to change this to your payment completion page
      return_url: return_url,
    },
  });


  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
  if (error.type === "card_error" || error.type === "validation_error") {
    showMessage(error.message);
  } else {
    showMessage("An unexpected error occurred.");
  }


  setLoading(false);
}

// Fetches the payment intent status after payment submission
async function checkStatus() {
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  );

  if (!clientSecret) {
    return;
  }

  const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

  switch (paymentIntent.status) {
    case "succeeded":

      showMessage("Payment succeeded!");
      break;
    case "processing":
      showMessage("Your payment is processing.");
      break;
    case "requires_payment_method":
      showMessage("Your payment was not successful, please try again.");
      break;
    default:
      showMessage("Something went wrong.");
      break;
  }
}

// ------- UI helpers -------

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageText.textContent = "";
  }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
}
    //   stripe js ends
    //select2 js
    $(document).ready(function() {
      $('.countrylist').select2();
      

  });
  //left menu parent and child active
  $("li ul").parent().addClass('has-sub');
  //ck editor image upload
 







