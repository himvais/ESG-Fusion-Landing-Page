var countries = [
'Afghanistan',
'Albania',
'Algeria',
'American Samoa',
'Andorra',
'Angola',
'Anguilla',
'Antarctica',
'Antigua And Barbuda',
'Argentina',
'Armenia',
'Aruba',
'Australia',
'Austria',
'Azerbaijan',
'Bahamas The',
'Bahrain',
'Bangladesh',
'Barbados',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bermuda',
'Bhutan',
'Bolivia',
'Bosnia and Herzegovina',
'Botswana',
'Bouvet Island',
'Brazil',
'British Indian Ocean Territory',
'Brunei',
'Bulgaria',
'Burkina Faso',
'Burundi',
'Cambodia',
'Cameroon',
'Canada',
'Cape Verde',
'Cayman Islands',
'Central African Republic',
'Chad',
'Chile',
'China',
'Christmas Island',
'Cocos (Keeling) Islands',
'Colombia',
'Comoros',
'Republic Of The Congo',
'Democratic Republic Of The Congo',
'Cook Islands',
'Costa Rica',
'Cote D\'Ivoire (Ivory Coast)',
'Croatia (Hrvatska)',
'Cuba',
'Cyprus',
'Czech Republic',
'Denmark',
'Djibouti',
'Dominica',
'Dominican Republic',
'East Timor',
'Ecuador',
'Egypt',
'El Salvador',
'Equatorial Guinea',
'Eritrea',
'Estonia',
'Ethiopia',
'External Territories of Australia',
'Falkland Islands',
'Faroe Islands',
'Fiji Islands',
'Finland',
'France',
'French Guiana',
'French Polynesia',
'French Southern Territories',
'Gabon',
'Gambia The',
'Georgia',
'Germany',
'Ghana',
'Gibraltar',
'Greece',
'Greenland',
'Grenada',
'Guadeloupe',
'Guam',
'Guatemala',
'Guernsey and Alderney',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Heard and McDonald Islands',
'Honduras',
'Hong Kong S.A.R.',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Israel',
'Italy',
'Jamaica',
'Japan',
'Jersey',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
'Korea North',
'Korea South',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Macau S.A.R.',
'Macedonia',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Man (Isle of)',
'Marshall Islands',
'Martinique',
'Mauritania',
'Mauritius',
'Mayotte',
'Mexico',
'Micronesia',
'Moldova',
'Monaco',
'Mongolia',
'Montserrat',
'Morocco',
'Mozambique',
'Myanmar',
'Namibia',
'Nauru',
'Nepal',
'Netherlands Antilles',
'Netherlands The',
'New Caledonia',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'Niue',
'Norfolk Island',
'Northern Mariana Islands',
'Norway',
'Oman',
'Pakistan',
'Palau',
'Palestinian Territory Occupied',
'Panama',
'Papua new Guinea',
'Paraguay',
'Peru',
'Philippines',
'Pitcairn Island',
'Poland',
'Portugal',
'Puerto Rico',
'Qatar',
'Reunion',
'Romania',
'Russia',
'Rwanda',
'Saint Helena',
'Saint Kitts And Nevis',
'Saint Lucia',
'Saint Pierre and Miquelon',
'Saint Vincent And The Grenadines',
'Samoa',
'San Marino',
'Sao Tome and Principe',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Slovakia',
'Slovenia',
'Smaller Territories of the UK',
'Solomon Islands',
'Somalia',
'South Africa',
'South Georgia',
'South Sudan',
'Spain',
'Sri Lanka',
'Sudan',
'Suriname',
'Svalbard And Jan Mayen Islands',
'Swaziland',
'Sweden',
'Switzerland',
'Syria',
'Taiwan',
'Tajikistan',
'Tanzania',
'Thailand',
'Togo',
'Tokelau',
'Tonga',
'Trinidad And Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Turks And Caicos Islands',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States',
'United States Minor Outlying Islands',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City State (Holy See)',
'Venezuela',
'Vietnam',
'Virgin Islands (British)',
'Virgin Islands (US)',
'Wallis And Futuna Islands',
'Western Sahara',
'Yemen',
'Yugoslavia',
'Zambia',
'Zimbabwe',
'Global',
'Other',
'Trans-continental',
'Trans-ocean',
'Montenegro',
];

$(function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {target:"#navbar", offset: 50});
    var header = $(".navbar");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.removeClass('bg-transparent')
                    .addClass("bg-white");
            header.addClass("shadow-sm");
            $('.navbar-brand img').css('height', '55');
        } else {
            header.removeClass("bg-white")
                    .addClass('bg-transparent');
                    header.removeClass("shadow-sm");
                    $('.navbar-brand img').css('height', '75');
        }
    });

    SetUrls();

    $("#scheduleModal").on('hidden.bs.modal', function (event) {
        // do something...
        $("#alertSuccess").hide();
        $("#alertError").hide();
        $("#frmDetails").find("input[type=text],input[type=email],input[type=tel],textarea,select").val('');
      });

      $("#reportModal").on('shown.bs.modal', function (event) {
        // do something...

        var src = $('#powerBiFrame').attr('src');

        if(!src){
            $('#powerBiFrame').attr('height', window.innerHeight - 175);
            $('#powerBiFrame').attr('src', env.urls.powerBIReportUrl);
        }
    });

    var options = '<option value="" selected> -- Select Country -- </option>';
    if(countries && countries.length){
        countries.forEach(function(c){
            options += '<option value="' + c + '">' + c + '</option>';
        });

        $("#country").html(options);
    }

  $.validator.messages.required = 'Please enter this required field';
 //$.validator.messages.required = 'Required';

  $.validator.methods.email = function( value, element ) {
    return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
  }

  $.validator.addMethod("phone", function(value, element) {
    return this.optional(element) || /^(?=.*[0-9])[- +()0-9]+$/.test(value);
  }, "Please enter a valid Phone Number");

  $("#frmDetails").validate({        
    rules: {
        name: { 
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            phone: true
        },
        // country: {
        //   required: true,
        // },
        company: {
          required: true,
        },
        // message: {
        //   required: true,
        // }
    }
});

    $("#btnSubmit").click(function(){
        $("#alertSuccess").hide();
        $("#alertError").hide();

        var valid = $("#frmDetails").valid();
        if(!valid){
            return;
        }

        ScheduleDemo();
    });
});

function SetUrls(){
    $("#clientLoginLink").attr('href', env.urls.clientLoginUrl);
    $("#videoPlayer").find('source').attr('src', env.urls.videoUrl);
    document.getElementById("videoPlayer").load();
}

function ScheduleDemo(){

    $("#btnSubmit").prop('disabled', true);
    var url = env.urls.apiUrl + 'api/Microsite/ScheduleDemoRequest';

    var d = {
        Name: $("#name").val(),
        Email: $("#email").val(),
        Phone: $("#phone").val(),
        Country: $("#country").val(),
        CompanyName: $("#company").val(),
        JobTitle: $("#jobtitle").val(),
        Message: $("#message").val(),
    };

    $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(d),
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $("#alertSuccess").show();
            $("#frmDetails").find("input[type=text],input[type=email],input[type=tel],textarea,select").val('');
            $("#btnSubmit").removeAttr('disabled');
        },
        error: function () {
            $("#alertError").show();
            $("#btnSubmit").removeAttr('disabled');
        }
    });
}

function DownloadPdf() {

    var fileURL = './assets/ESG_Report.pdf';
    
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = 'ESG_Report.pdf';

        var evt = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
        });
        save.dispatchEvent(evt);

        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, 'ESG_Report.pdf')
        _window.close();
    }
}