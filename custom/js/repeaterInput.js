function checkcount(type) {
    if (type == "hide") {
        var count = document.querySelectorAll('.inputFormRow').length;
        if (count == 3) {
            $('.hideelement').hide();
        }
    } else {
        var count = document.querySelectorAll('.inputFormRow').length;
        if (count <= 3) {
            $('.hideelement').show();
        }
    }
}
var image_count = 0;
var testimonial_image_count = 0;
var testimonial_rating_count = 0;
var radio_count = 1;

function repeaterInput(element, element_type, rowno, divid, path, theme_type, color, assets) {
     
    var html = '';
    var preview_html = '';
    var social_preview_html = '';
    
    if (element_type == "custom_link") {
         html = `<div class="col-md-12" id="inputFormRow33">
                <div class="card border-primary border-2 border-bottom-0 border-start-0 border-end-0">
                    <div class="card-body ">
                      <div class="float-end action-btn bg-danger ms-2">
                        <a class="btn btn-sm d-inline-flex align-items-center hover-none"  id="removeRow_custom_link" data-id="custom_links_${rowno}"><i class="ti ti-trash"></i></a>
                      </div>
                      <div class="row">
                      <div class="col-md-6">
                            <div class="form-group">
                                <label class="label-title">Links Name</label>
                                <input type="text" class="form-control description-text" rows="3" id="custom_name_${rowno}" placeholder="Enter Link Name" name="links[${rowno}][link_name]" > 
                            </div> 
                              <div class="form-group d-flex">
                                <span class="col-md-6">Highlight</span>
                                <div class="col-md-6 toggol-btn">
                                    <div class="form-check form-switch custom-bg">
                                        <input class="form-check-input change-bg" type="checkbox" name="links[${rowno}][is_enabled]" role="switch" id="custom_link_enabled_${rowno}">
                                    </div>
                                </div>
                            </div>
                      </div>
                      <div class="col-md-6">
                            <div class="form-group">
                                <label class="label-title">Link Url</label>
                                <input type="text" id="custom_link_${rowno}" name="links[${rowno}][link_url]"  placeholder="Enter link" class="form-control social_href" required/>
                                
                                <h6 class="text-danger text-xs" id="custom_link_${rowno}_error_href"></h6>
                            </div> 
                      </div>
                      </div>
                    
                    </div>
                  </div>

                </div> `;
                
                 preview_html = `<li class="icons downloadSpeedIcon custom_links_${rowno}_previews" id="custom_links_${rowno}_preview">
                    <span class="svgIcon">
                        <svg class="downloadspeed-orange-svg-icon" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 841.9 595.3" style="enable-background:new 0 0 841.9 595.3;"
                            xml:space="preserve">
                            <g>
                                <path class="downloadspeed-orange-svg-icon" d="M299.5,307.8c0.5-3.5,0.9-7.1,1.4-10.6c3.6-24.3,13.6-45.7,30-63.9c18.1-20.1,40.5-33.2,67.1-38.1
                                    c40.2-7.4,75.9,2.6,106.3,30.2c20.7,18.8,33.1,42.5,37.7,70.2c0.7,4.1,1.1,8.2,1.6,12.2c0,4.6,0,9.2,0,13.8
                                    c-0.5,3.6-0.8,7.2-1.4,10.8c-3.9,26.4-15.3,49-33.9,68c-2.8,2.9-6.4,3-9.3,0.1c-6-6-12.1-12-18-18c-2.6-2.7-2.8-6.3-0.4-8.7
                                    c2.4-2.5,6.1-2.3,8.9,0.4c4.6,4.6,9.2,9.2,14,14c17.1-19.4,26.3-41.6,28-67.6c-1.1,0-1.9,0-2.7,0c-5.7,0-11.4,0-17.2,0
                                    c-3.7,0-6.5-2.5-6.5-5.9c0-3.3,2.7-5.9,6.4-6c5.7-0.1,11.4,0,17.2,0c0.9,0,1.7,0,2.8,0c-1.7-25.8-11-48.1-28-67.5
                                    c-4.6,4.6-9.1,9.1-13.6,13.6c-0.9,0.9-2.1,1.8-3.3,2.2c-2.6,0.9-5.3-0.2-6.7-2.4c-1.5-2.3-1.2-5.3,0.8-7.4c4-4.2,8.2-8.2,12.3-12.3
                                    c0.6-0.6,1.4-1,2.4-1.7c-19.7-17.3-41.9-26.6-67.7-28.3c-0.1,1-0.1,1.8-0.1,2.6c0,5.8,0,11.6,0,17.4c0,2.7-1.3,4.8-3.8,5.8
                                    c-2.1,0.9-4.2,0.5-6-1c-1.7-1.5-2.2-3.4-2.2-5.6c0-5.5,0-11,0-16.4c0-0.9,0-1.7,0-2.9c-25.8,1.7-48,11-67.9,28.4
                                    c1.8,1.5,3.6,2.9,5.2,4.4c3,2.9,5.9,5.8,8.8,8.7c3.1,3.1,3.4,6.7,0.9,9.2c-2.5,2.5-6.2,2.2-9.3-0.8c-3.9-3.9-7.9-7.9-11.8-11.8
                                    c-0.5-0.5-1.1-1.1-1.8-1.7c-17,19.3-26.3,41.6-27.9,67.4c2.8,0,5.4,0,8,0c4.1,0,8.1-0.1,12.2,0c3.5,0.1,6.2,2.8,6.2,6
                                    c0,3.3-2.7,5.8-6.3,5.9c-5.7,0.1-11.4,0-17.2,0c-0.9,0-1.7,0-2.9,0c1.6,25.8,10.8,48,27.8,67.4c0.6-0.6,1.2-1.1,1.8-1.6
                                    c4.1-4,8.1-8.1,12.1-12.1c2.9-2.9,6.6-3.1,9.1-0.5c2.4,2.4,2.2,6.1-0.6,8.9c-5.9,5.9-11.8,11.8-17.7,17.7c-3,3-6.5,3-9.4,0
                                    c-19.5-20-31.1-43.8-34.4-71.6c-0.3-2.4-0.6-4.9-0.9-7.3C299.5,317,299.5,312.4,299.5,307.8z" />
                                <path class="downloadspeed-orange-svg-icon" d="M435.2,296.5c10.9,9,12.2,27.5-1.3,36.7c-7.6,5.2-17.9,5.3-26.3-0.8c-7.3-5.3-9.2-13.2-7.9-21.9
                                    c1.3-8.6,8.5-15.8,17.1-17.5c1.5-0.3,3.2-0.6,4.7-0.5c1.9,0.2,2.7-0.5,3.5-2.3c5.3-13.4,10.7-26.6,15.9-40c0.8-2,2-3.7,4.1-4.4
                                    c2.1-0.7,4.1-0.5,5.8,1.1c1.7,1.7,2.6,3.7,1.8,6c-0.9,2.8-2.1,5.5-3.2,8.2C444.6,273,439.9,284.7,435.2,296.5z M421.4,325
                                    c5.9,0,10.5-4.5,10.3-10.4c-0.3-6.8-3.4-9.9-10-10.2c-6-0.3-10.7,4.5-10.4,10.5C411.6,321.6,414.7,324.7,421.4,325z" />
                            </g>
                        </svg>
                    </span>
                    
                    <a href="#" class="custom_link_${rowno}_href_preview" id="custom_link_${rowno}_href_preview" target="_blank">
                              <span id="custom_name_${rowno}_preview">Link name</span>
                    </a>
                          
                </li>`;
        rowno++;
        
    }

    if (element_type == "contact") {
        html = `<tr id="inputFormRow" class="inputFormRow">
                <td>
                  <div class="form-icon-user">
                    
                      `;
                      if(element == "Address"){
                        html += `
                            <div class="input-group">
                            <span class="input-group-text"><img  src="${assets}/${element.toLowerCase()}.svg" ></span>
                            <input type="text" id="${element}_${rowno}" name="contact[${rowno}][${element}][${element}]" class="keyupinpu form-control" placeholder="Enter Address" required/>
                            </div>
                            <div class="input-group">
                            <input type="text"  name="contact[${rowno}][${element}][${element}_url]" class="keyupinpu form-control mt-2" placeholder="Enter Address Url" required/>
                            </div>`;
                            
                      }
                      else
                      { 
                        html += `
                        <div class="input-group">
                        <span class="input-group-text"><img  src="${assets}/${element.toLowerCase()}.svg" ></span>
                        <input type="text" id="${element}_${rowno}" name="contact[${rowno}][${element}]" class="keyupinpu form-control" required/>
                        </div>`;
                      }
                      
            html += `<input type="hidden" name="contact[${rowno}][id]" value=${rowno}>
                  </div>
                </td>
                <td class="text-right">
                    <div class="action-btn bg-danger ms-2">
                    <button class="btn btn-sm d-inline-flex align-items-center contact_${rowno}" id="removeRow_contact" data-id="contact_${rowno}"><i class="ti ti-trash text-white"></i></button>
                    </div>
                </td>
              </tr>`;
        if (theme_type == 'theme1' || theme_type == 'theme8') {
            preview_html = `<li class="d-flex align-items-center justify-content-center"  id="contact_${rowno}">
                        <div class="image-icon">
                            <img src="${path}/${color}/${element.toLowerCase()}.svg"  class="img-fluid">
                        </div>
                        <div class="contact-text">
                            <h4 id="${element}_${rowno}_preview"></h4>
                        </div>
                    </li>`;
        }
        i
        if (theme_type == 'theme2') {
            preview_html = `<li class="d-flex align-items-center justify-content-start"  id="contact_${rowno}">
                        <div class="image-icon">
                            <img src="${path}/${color}/contact/${element.toLowerCase()}.svg"  class="img-fluid">
                        </div>
                        <div class="contact-text">
                            <h4 id="${element}_${rowno}_preview"></h4>
                        </div>
                    </li>`;
        }
        if (theme_type == 'theme3') {
            preview_html = `<li class="d-flex align-items-center justify-content-start"  id="contact_${rowno}">
                        <div class="image-icon">
                            <img src="${path}/contact/${element.toLowerCase()}.svg"  class="img-fluid">
                        </div>
                        <div class="contact-text">
                            <h4 id="${element}_${rowno}_preview"></h4>
                        </div>
                    </li>`;
        }
        
        if (theme_type == 'theme4') {

            preview_html = `<li class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center" id="contact_${rowno}">
                    <div class="image-icon">
                        <img src="${path}/${color}/contact/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                    </div>
                    <div class="contact-text">
                        <a href="">
                            <h4 id="${element}_${rowno}_preview"></h4>
                        </a>
                    </div>
                </li>`;
        }
        if (theme_type == 'theme5') {
            
            preview_html = `<li class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="contact_${rowno}">
                <div class="d-flex align-items-center justify-content-start">
                    <div class="image-icon">
                        <img src="${path}/${color}/contact/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                    </div>
                    <div class="contact-text">
                        <a href="mialto:contact@alpesh.com">
                            <h4 id="${element}_${rowno}_preview"></h4>
                        </a>

                    </div>
                </div>
            </li>`;
        }
        if (theme_type == 'theme6') {
            
            preview_html = `<li class="d-flex align-items-center justify-content-start" id="contact_${rowno}">
                    <div class="contact-text">
                        <span>${element}</span>

                        <a href="#">
                            <h4 id="${element}_${rowno}_preview"></h4>
                        </a>
                    </div>
                </li>`;
        }
        if (theme_type == 'theme7') {
            preview_html = `<li class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" id="contact_${rowno}">
                <div class="image-icon">
                    <img src="${path}/${color}/contact/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                </div>
                <div class="contact-text">
                    <a href="#">
                        <h4 id="${element}_${rowno}_preview"></h4>
                    </a>
                </div>
            </li>`;
        }
        if (theme_type == 'theme8') {

            preview_html = `<li class=""  id="contact_${rowno}">
                        <a href="ssss">
                            <img src="${path}/${color}/contact/${element.toLowerCase()}.svg"  class="img-fluid">
                            <span>`;
            if(element = 'Web_url'){
                preview_html += `Web Url</span>
                        </a>
                    </li>`;
            } 
            else{
                preview_html += `${element}</span>
                        </a>
                    </li>`;
            }              
                            
        }
        if (theme_type == 'theme9') {
            
            preview_html = `<li  id="contact_${rowno}">
            <div class="d-flex align-items-center justify-content-start">
                <div class="contact-text">
                    <span>
                    ${element}
                    </span>
                    <a href="#">
                        <h4 id="${element}_${rowno}_preview"></h4>
                    </a>
                </div>
            </div>
        </li>`;
        }
        if (theme_type == 'theme10') {
            preview_html = `<li class="" id="contact_${rowno}">
                <a href="#">
                    <div class="image-icon">
                        <img src="${path}/${color}/contact/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                    </div>
                    <div class="contact-text">
                        <p>`;
            if(element = 'Web_url'){
                    preview_html += `Web Url</p>
                        </div>
                    </a>
                </li>`;
            } 
            else{
                    preview_html += `${element}</p>
                        </div>
                    </a>
                </li>`;
            }             
                        


        }

        rowno++;
        $("#fieldModal").modal('hide');
    }

    if (element_type == "appointment") {
      var type='';
      if(color==1){
           type ='_24';
      }
        
            html = `<tr id="inputFormRow1">
                <td>
                    <input type="text"  class="form-control appointment_time timepicker${type}" name="hours[${rowno}][start]" id="appoinment_start_${rowno}" value="00:00" onchange="changeTime(this.id)">
                </td>
                <td>
                  <input type="text" class="form-control appointment_time timepicker${type}" name="hours[${rowno}][end]" id="appoinment_end_${rowno}" value="00:00" onchange="changeTime(this.id)">
                </td>
                <td class="text-right">
                    <div class="action-btn bg-danger ms-2 float-end">
                        <a class="btn btn-sm d-inline-flex align-items-center appointment_${rowno}" id="removeRow_appointment" data-id="appointment_${rowno}"><i class="ti ti-trash text-white"></i></a>
                    </div>    
                </td>
            </tr>`;
            
      

        
            
        preview_html = `<div class="radio pr-8"  id="appointment_${rowno}">
                        <input id="radio-preview-${radio_count}" name="radio" type="radio">
                        <label for="radio-preview-${radio_count}" class="radio-label"><span id="appoinment_start_${rowno}_preview">00:00</span> - <span id="appoinment_end_${rowno}_preview">00:00</span></label>
                    </div>`;
        
        
        radio_count++;
        rowno++;
        
       
        
        
        
    }
    
    if (element_type == "slider") {

        html = `<div class="col-md-6" id="inputFormRow12">
              <div class="card border-primary border-2 border-bottom-0 border-start-0 border-end-0">
                  <div class="card-body text-center">
                    <div class="float-end action-btn bg-danger ms-2">
                      <a class="btn btn-sm d-inline-flex align-items-center hover-none" id="removeRow_slider" data-id="slider_${rowno}" data-id="slider" id="removeRow"><i class="ti ti-trash"></i></a>
                    </div>
                    <div class="position-relative ml-2 d-inline-flex">
                      <img alt="Image placeholder" src="${path}/placeholder-image.jpg" id="slider_image${image_count}" class="imagepreview">
                      <div class="position-absolute top-50 start-100 translate-middle">
                        <input type="file" id="file-1"  class="custom-input-file d-none custom-input-file-link slider_image${image_count}  data-multiple-caption="{count} files selected " multiple="" name="slider[${rowno}][image]" >
                          <span class="btn btn-sm btn-primary btn-icon" >

                            <i class="ti ti-pencil" onclick="selectFile('slider_image${image_count}')"></i>
                            

                          </span>
                      </div>    
                    </div>
                  
                  </div>
                </div>

              </div> `;
        var sclass = '';
        preview_html = `<div class="col-lg-6" id="slider_${rowno}">`;
        var desc = `<p id="description_${rowno}_preview"></p>`
        if (theme_type == 'theme4' || theme_type == 'theme5' || theme_type == 'theme9' || theme_type == 'theme10') {
            preview_html = `<div class="col-lg-4" id="slider_${rowno}">`;
            desc = '';
        } else if (theme_type == 'theme6' || theme_type == 'theme7') {
            preview_html = `<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="slider_${rowno}">`;
        }

        if (theme_type == 'theme7') {
            sclass = ' card-contact-shadow mt-2';
        }

        preview_html += `<div class="slider-card ${sclass}">
                            <div class="slider-card-img">
                                <img id="slider_image${image_count}_preview"  src="${path}/image.svg" alt="image" class="img-fluid">
                            </div>
                            <div class="slider-card-heading">
                                <h3 id="title_${rowno}_preview">
                                </h3>
                                <p>
                                ${desc}
                                </p>
                            </div>
                        </div>
                    </div>`;
        image_count++;
        rowno++;
    }

    if (element_type == "service") {

        html = `<div class="col-md-6" id="inputFormRow2">
              <div class="card min-393 border-primary border-2 border-bottom-0 border-start-0 border-end-0">
                  <div class="card-body text-center">
                    <div class="float-end action-btn bg-danger ms-2">
                      <a class="btn btn-sm d-inline-flex align-items-center hover-none" id="removeRow_services" data-id="services_${rowno}" id="removeRow"><i class="ti ti-trash"></i></a>
                    </div>
                    <div class="position-relative ml-2 d-inline-flex">
                      <img alt="Image placeholder" src="${path}/placeholder-image.jpg" id="service_image${image_count}" class="imagepreview">
                      <div class="position-absolute top-50 start-100 translate-middle">
                        <input type="file" id="file-5"  class="custom-input-file d-none custom-input-file-link service_image${image_count}  data-multiple-caption="{count} files selected " multiple="" name="services[${rowno}][image]" >
                          <span class="btn btn-sm btn-primary btn-icon" >

                            <i class="ti ti-pencil" onclick="selectFile('service_image${image_count}')"></i>
                            

                          </span>
                      </div>    
                    </div>
                    <h5 class="mt-4 font-weight-bold mb-0 input-h4">
                      <input type="text" id="title_${rowno}"  name="services[${rowno}][title]" class="form-control h5 textboxhover border-0 " placeholder="Enter title">

                    </h5>
                      <div class="mt-2  textarea-adjust">
                        <textarea class="form-control textboxhover input-text-location text-center border-0" id="description_${rowno}" name="services[${rowno}][description]"   placeholder="Enter Description"></textarea>
                      </div>
                    <h5 class="mt-2 font-weight-bold mb-0 input-h4">
                      <input type="text" id="purchase_link_${rowno}"  name="services[${rowno}][purchase_link]" class="form-control h5 textboxhover border-0 " placeholder="Purchase Link">

                    </h5>  
                  </div>
                </div>

              </div> `;
       

        preview_html += `<div class="col-lg-6 res-pr-0" id="services_${rowno}">
                            <div class="card services_${rowno}">
                                <div class="service-card-img">
                                    <img id="service_image${image_count}_preview"  src="${path}/image.svg" alt="image" class="img-fluid">
                                </div>
                                <div class="service-card-heading text-center">
                                    <h4 id="title_${rowno}_preview" class="title_${rowno}_previews">
                                    </h4>
                                    <p id="description_${rowno}_preview" class="description_${rowno}_previews">
                                    </p>
                                </div>
                            </div>
                        </div>`;
        image_count++;
        rowno++;
    }

    if (element_type == "testimonial") {

        html = `<div class="col-md-6" id="inputFormRow3">
                <div class="card min-393 border-primary border-2 border-bottom-0 border-start-0 border-end-0">
                    <div class="card-body text-center">
                      <div class="float-end action-btn bg-danger ms-2">
                        <a class="btn btn-sm d-inline-flex align-items-center hover-none"  id="removeRow_testimonials" data-id="testimonials_${rowno}"><i class="ti ti-trash"></i></a>
                      </div>
                      <div class="position-relative ml-2 d-inline-flex">
                        <img alt="Image placeholder" src="${path}" id="testimonial_image${testimonial_image_count}" class="imagepreview">
                        <div class="position-absolute top-50 start-100 translate-middle" >
                            <input type="file" id="file-1"  class="custom-input-file d-none custom-input-file-link testimonial_image${testimonial_image_count}"  data-multiple-caption="{count} files selected" multiple="" name="testimonials[${rowno}][image]" >
                            <span class="btn btn-sm btn-primary btn-icon" onclick="selectFile('testimonial_image${testimonial_image_count}')"> <i class="fas fa-pen"></i></span>
                        </div>
                      </div>
                      <h5 class="mt-4 font-weight-bold mb-0 input-h4">
                            <span class="stars${rowno}">0</span>/5
                      </h5>
                      <div class="text-center testimonial-ratings mt-2">
                      <fieldset id='demo1' class="rating">
                            <input class="stars${rowno}" type="radio" id="testimonials-5-${testimonial_rating_count}" name="testimonials[${rowno}][rating]"  value="5" onclick="getRadio(this)"/>
                            <label class="full" for="testimonials-5-${testimonial_rating_count}" title="Awesome - 5 stars"></label>
                            <input class="stars${rowno}" type="radio" id="testimonials-4-${testimonial_rating_count}" name="testimonials[${rowno}][rating]" value="4" onclick="getRadio(this)"/>
                            <label class="full" for="testimonials-4-${testimonial_rating_count}" title="Pretty good - 4 stars"></label>
                            <input class="stars${rowno}" type="radio" id="testimonials-3-${testimonial_rating_count}" name="testimonials[${rowno}][rating]" value="3" onclick="getRadio(this)"/>
                            <label class="full" for="testimonials-3-${testimonial_rating_count}" title="Meh - 3 stars"></label>
                            <input class="stars${rowno}" type="radio" id="testimonials-2-${testimonial_rating_count}" name="testimonials[${rowno}][rating]" value="2" onclick="getRadio(this)"/>
                            <label class="full" for="testimonials-2-${testimonial_rating_count}" title="Kinda bad - 2 stars"></label>
                            <input class="stars${rowno}" type="radio" id="testimonials-1-${testimonial_rating_count}" name="testimonials[${rowno}][rating]" value="1" onclick="getRadio(this)"/>
                            <label class="full" for="testimonials-1-${testimonial_rating_count}" title="Sucks big time - 1 star"></label>
                        </fieldset>
                        </div>
                        <div class="mt-2 textarea-adjust">
                          <textarea class="form-control textboxhover input-text-location text-center border-0" id="testimonial_description_${rowno}" name="testimonials[${rowno}][description]"   placeholder="Enter Description"></textarea>
                        </div>
                    </div>
                  </div>

                </div> `;

        preview_html = `<div class="col-lg-6 res-pr-0" id="testimonials_${rowno}">
                            <div class="card">
                                <div class="testimonials-card-img">
                                    <img id="testimonial_image${testimonial_image_count}_preview" src="${path}" alt="user" class="img-fluid">
                                </div>
                                <div class="service-card-heading text-center">
                                    <h3>
                                         <span class="stars${rowno}">0</span>/5
                                    </h3>
                                    <span id="stars${rowno}_star" class="star-section d-flex align-items-center justify-content-center">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    </span>
                                    <p id="testimonial_description_${rowno}_preview" class="testimonial_description_${rowno}_previews">
                                    </p>
                                </div>
                            </div>
                        </div>`;
        testimonial_rating_count++;
        testimonial_image_count++;
        rowno++;
    }
    
    if (element_type == "gallery") {
        if ($('#collapsePhotos').collapse({ 'toggle': false })) {$('#collapsePhotos').collapse('show');}
        html = `<div class="col-md-6" id="inputFormRow22">
              <div class="card border-primary border-2 border-bottom-0 border-start-0 border-end-0">
                  <div class="card-body text-center">
                    <div class="float-end action-btn bg-danger ms-2">
                      <a class="btn btn-sm d-inline-flex align-items-center hover-none" id="removeRow_gallery" data-id="gallery_image${rowno}" id="removeRow"><i class="ti ti-trash"></i></a>
                    </div>
                    <div class="position-relative ml-2 d-inline-flex">
                      <img alt="Image placeholder" src="${path}/placeholder-image.jpg" id="gallery_image${rowno}" class="imagepreview">
                      <div class="position-absolute top-50 start-100 translate-middle">
                        <input type="file" id="file-1"  class="custom-input-file d-none custom-input-file-link gallery_image${rowno}  data-multiple-caption="{count} files selected " multiple="" name="gallery[${rowno}][image]" >
                          <span class="btn btn-sm btn-primary btn-icon" >

                            <i class="ti ti-pencil" onclick="selectFile('gallery_image${rowno}')"></i>
                            

                          </span>
                      </div>    
                    </div>
                  
                  </div>
                </div>

              </div> `;
        
        preview_html += `<div class="photos">
                    <div class="tab-img" data-radium="true">
                        <img id="gallery_image${rowno}_preview" class="gallery_image${rowno}_previews" src="${path}/image.svg" alt="image" class="img-fluid">
                    </div>
                </div>`;
        image_count++;
        rowno++;
    }

    if (element_type == "video_links") {
        if ($('#collapseVideos').collapse({ 'toggle': false })) {$('#collapseVideos').collapse('show');}
        html = `<div class="col-md-12" id="inputFormRow31">
                    <div class="card border-primary border-2 border-bottom-0 border-start-0 border-end-0">
                        <div class="card-body text-center">
                            <div class="float-end action-btn bg-danger ms-2">
                                <a class="btn btn-sm d-inline-flex align-items-center hover-none"  id="removeRow_video_link" data-id="video_description_${rowno}"><i class="ti ti-trash"></i></a>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control video_url_set" rows="3"name="video_url[${rowno}][video_url]" id="video_description_${rowno}" placeholder="Enter Link" cols="50">
                            </div>
                        </div>
                    </div>
                </div> `;

        preview_html = `<div class="photos" id="video_description_${rowno}">
                            <div class="tab-img" data-radium="true">
                                <iframe id="video_description_${rowno}_preview" class="video_description_${rowno}_previews" src="${path}/image.svg" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                            </div>
                       </div>`;
        rowno++;

    }
    
    if (element_type == "social_links") {
        html = `<tr id="inputFormRow4" class="inputFormRow">
                <td>
                  <div class="input-group">
                      <span class="input-group-text"><img src="${assets}/black/${element.toLowerCase()}.svg"></span>
                      <input type="text" id="social_link_${rowno}" name="socials[${rowno}][${element}]" placeholder="Enter link" class="form-control social_href" required/>
                      <input type="hidden" name="socials[${rowno}][id]" value=${rowno}><br>
                        <h6 class="text-danger text-xs" id="social_link_${rowno}_error_href"></h6>
                  </div>
                </td>
                <td class="text-right float-end">
                <div class="action-btn bg-danger ms-2">
                    <button class="btn btn-sm d-inline-flex align-items-center" id="removeRow_socials" data-id="socials_${rowno}"><i class="ti ti-trash text-white"></i></button>
                </div>    
                </td>
              </tr>`;

        if (theme_type == 'theme1') {
            preview_html = `
                      <div class="col-md-2 socials_${rowno}" id="socials_${rowno}">
                      <span>
                        <a href="#" id="social_link_${rowno}_href_preview" class="social_link_${rowno}_href_preview"  target="_blank">
                            <div class="image-icon">
                                <img src="${path}/${color}/${element.toLowerCase()}.svg" alt="twitter" class="img-fluid">
                            </div>
                        </a>
                    </span>
                    </div>`;
            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme2') {
            preview_html = `<div class="col-md-3 social-image-icon socials_${rowno}" id="socials_${rowno}">
                                <a href="#" id="social_link_${rowno}_href_preview" class="social_link_${rowno}_href_preview"  target="_blank">
                                    <img src="${path}/${color}/social/${element.toLowerCase()}.svg" alt="${element.toLowerCase()}"
                                        class="img-fluid hover-hide">
                                    <img src="${path}/${color}/social/${element.toLowerCase()}.svg" alt="${element.toLowerCase()}"
                                        class="img-fluid hover-show">
                                </a>
                        </div>`;
            social_preview_html = `<div class="col-md-2 socials_${rowno}" id="socials_${rowno}">
                                <span>
                                  <a href="#" id="social_link_${rowno}_href_preview" class="social_link_${rowno}_href_preview"  target="_blank">
                                      <div class="image-icon">
                                          <img src="${path}/black/${element}.svg" alt="${element}" class="img-fluid">
                                      </div>
                                  </a>
                                </span>
                              </div>
                                `;
            $(".inputrow_socials_preview").append(social_preview_html);
        }

        if (theme_type == 'theme3') {
            preview_html = `<div class="social-image-icon socials_${rowno}">
                          <a href="#" class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview" target="_blank">
                              <img src="${path}/social/${element.toLowerCase()}.svg" alt="${element}"
                                  class="img-fluid">
                          </a>
                      </div>`;
            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme4') {
           
            preview_html = `<div class="col-md-2 socials_${rowno}" id="socials_${rowno}">
              <div class="social-image-icon">
                  <a href="#" class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview" target="_blank">
                      <img src="${path}/${color}/social/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                  </a>
              </div>
          </div>`;

            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme5') {
           
           
            preview_html = `<div class="col-md-3 socials_${rowno}" id="socials_${rowno}">
              <div class="social-image-icon">
                  <a href="#" class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview" target="_blank">
                      <img src="${path}/${color}/social/${element.toLowerCase()}.svg" class="img-fluid">
                  </a>
              </div>
          </div>`;

            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme6') {
            
            preview_html = `<div class="col-md-3 socials_${rowno}" id="socials_${rowno}">
              <div class="social-image-icon">
                  <a href="#" class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview" target="_blank">
                      <img src="${path}/${color}/social/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                  </a>
              </div>
          </div>`;

            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme7') {
            preview_html = `<div class="col-md-2 socials_${rowno}" id="socials_${rowno}">
                <div class="social-image-icon">
                    <a href="#"  class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview" target="_blank">
                        <img src="${path}/${color}/social/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                    </a>
                </div>
            </div>`;
            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme8') {
           

            preview_html = `<li class="d-flex align-items-center justify-content-start  socials_${rowno}" id="socials_${rowno}">
                <div class="left-section">
                    <div class="left-images">
                        <img src="${path}/${color}/social/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                    </div>
                </div>
                <div class="contact-text">
                    <h4  class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview">https://demo.rajodiya.com/</h4>
                    <span>${element}</span>
                </div>
            </li>`;

            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme9') {
           
            preview_html = `<div class="col-md-2 socials_${rowno}" id="socials_${rowno}">
            <div class="social-image-icon">
                <a href="#"  class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview" target="_blank">
                    <img src="${path}/social/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                </a>
            </div>
        </div>`;


            $(".inputrow_socials_preview").append(preview_html);
        }
        if (theme_type == 'theme10') {
        
            preview_html = `<div class="col-md-3 socials_${rowno}" id="socials_${rowno}">
            <div class="social-image-icon">
                <a href="#"  class="social_link_${rowno}_href_preview" id="social_link_${rowno}_href_preview" target="_blank">
                    <img src="${path}/${color}/social/${element.toLowerCase()}.svg" alt="${element}" class="img-fluid">
                </a>
            </div>
        </div>`;


            $(".inputrow_socials_preview").append(preview_html);
        }
        rowno++;

        $("#socialsModal").modal('hide');

    }
    

    $(`#${divid}`).append(html);
    
    console.log(divid);
    
    $(`#${divid}_preview`).append(preview_html);
    if(divid=='inputrow_appointment_0' || divid=='inputrow_appointment_1'){
        $(`#inputrow_appointment_preview`).append(preview_html);
    }
    
    
    if (element_type == "contact") {
        checkcount('hide');
    }
    $("input").keyup(function() {
        var id = $(this).attr('id');
        //console.log(id);
        var preview = $(`#${id}`).val();
        $(`#${id}_preview`).text(preview);
    });
    
   
     $(`.video_url_set`).change(function() {
         var elementid = $(this).attr('id');
         var url = $(`#${elementid}`).val();
         $(`#${elementid}_preview`).attr('src', url);
     });
    
    

    $("textarea").keyup(function() {
        var id = $(this).attr('id');
        var preview = $(`#${id}`).val();
        $(`#${id}_preview`).text(preview);
        
    });
    $(".social_href").keyup(function() {
        var id = $(this).attr('id');
        //console.log(id);
        var preview = $(`#${id}`).val();
        var h_preview = validURL(preview);
        //console.log(preview);
        if (h_preview == true) {
            $(`#${id}_error_href`).text("");
            $(`.${id}_href_preview`).attr("href", preview);
        } else {
            $(`#${id}_error_href`).text("Please enter valid link");
            $(`#${id}_href_preview`).attr("href", "#");
        }
        //var h_preview = `{{ url("") }}/${preview}`;

    });
    $( ".textboxhover" ).mouseover(function() {
        $( this ).removeClass( "border-0" );
    }).mouseout(function() {
        $( this ).addClass("border-0");
    });

    return rowno;
}

/*$(document).on('click', '#removeRow', function () {

    if($(this).data('id') == "testimonials"){
      $(this).closest('#inputFormRow3').remove();
    }
    if($(this).data('id') == "socials"){
      $(this).closest('#inputFormRow4').remove();
    }
});*/

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

$(document).on('click', '#removeRow_contact', function() {
    var this_id = $(this).data('id');
    $(`#${this_id}`).remove();
    $(this).closest('#inputFormRow').remove();
    checkcount('show');
});

$(document).on('click', '#removeRow_appointment', function() {
    var this_id = $(this).data('id');
    $(`#${this_id}`).remove();
    $(this).closest('#inputFormRow1').remove();
});

$(document).on('click', '#removeRow_custom_link', function() {
    var this_id = $(this).data('id');
    $(`.${this_id}_previews`).remove();
    $(`#${this_id}`).remove();
    $(this).closest('#inputFormRow33').remove();
});

$(document).on('click', '#removeRow_slider', function() {
    var this_id = $(this).data('id');
    $(`#${this_id}`).remove();
    $(this).closest('#inputFormRow12').remove();
});

$(document).on('click', '#removeRow_gallery', function() {
    var this_id = $(this).data('id');
    console.log(this_id);
    $(`.${this_id}_previews`).remove();
    $(`#${this_id}`).remove();
    $(this).closest('#inputFormRow22').remove();
});

$(document).on('click', '#removeRow_video_link', function() {
    var this_id = $(this).data('id');
    console.log(this_id);
    $(`.${this_id}_previews`).remove();
    $(`#${this_id}`).remove();
    $(this).closest('#inputFormRow31').remove();
});

$(document).on('click', '#removeRow_services', function() {
    var this_id = $(this).data('id');
    $(`#${this_id}`).remove();
    $(`.${this_id}`).remove();
    $(this).closest('#inputFormRow2').remove();
});

$(document).on('click', '#removeRow_testimonials', function() {
    var this_id = $(this).data('id');
    $(`#${this_id}`).remove();
    $(`.${this_id}`).remove();
    $(this).closest('#inputFormRow3').remove();
});

$(document).on('click', '#removeRow_socials', function() {
    var this_id = $(this).data('id');
    $(`.${this_id}`).remove();
    $(this).closest('#inputFormRow4').remove();
});

$(".textarea_db").keyup(function() {
    var id = $(this).attr('id');
    var preview = $(`#${id}`).val();
    $(`.${id}_previews`).text(preview);
});
/*
 $('input').on('paste', function (e) { //Attach paste event handler for all inputs
        $(this).val('').val(e.target.value); //Clear the current value, then insert the value of the data that was pasted
    });*/
    
$('.socail_input').on('paste', function (e) {     
    var id = $(this).attr('id');
   
    const card = id.split("_");
    var theme=card[0];
    var type=card[1];
    
    if(theme==='theme1'){
    var icons = ["twit", "link", "insta", "you"];    
    }else if(theme==='theme2'){
       var icons = [""];     
    }else if(theme==='theme3'){
       var icons = ["twit", "link", "insta", "you"];     
    }else if(theme==='theme4'){
       var icons = ["twit", "link", "insta", "you"];     
    }else if(theme==='theme5'){
       var icons = ["twit", "link", "insta", "you"];     
    }else if(theme==='theme6'){
       var icons = ["twit", "link", "insta", "you"];     
    }
        
    isIcons = icons.includes(type);
    var value_input = $(`#${id}`).val();
    if(isIcons){
    
        if(value_input == ''){
           $(`#${id}_previews`).hide();
        }else {
            $(`#${id}_previews`).show();
            $(`#${id}_href_previews`).attr("href", value_input);
        }
    }else{
    
        if(value_input == ''){
           $(`#${id}_previews`).hide();
        }else {
            $(`#${id}_previews`).show();
            $(`#${id}_href_previews`).attr("href", value_input);
        }
    }
});




$(".socail_input").keyup(function() {
    var id = $(this).attr('id');
    
    const card = id.split("_");
    var theme=card[0];
    var type=card[1];
    
    if(theme==='theme1'){
    var icons = ["twit", "link", "insta", "you"];    
    }else if(theme==='theme2'){
       var icons = [""];     
    }else if(theme==='theme3'){
       var icons = ["twit", "link", "insta", "you"];     
    }else if(theme==='theme4'){
       var icons = ["twit", "link", "insta", "you"];     
    }else if(theme==='theme5'){
       var icons = ["twit", "link", "insta", "you"];     
    }else if(theme==='theme6'){
       var icons = ["twit", "link", "insta", "you"];     
    }
        
    isIcons = icons.includes(type);
    var value_input = $(`#${id}`).val();
    if(isIcons){
    
        if(value_input == ''){
           $(`#${id}_previews`).hide();
        }else {
            $(`#${id}_previews`).show();
            $(`#${id}_href_previews`).attr("href", value_input);
        }
    }else{
    
        if(value_input == ''){
           $(`#${id}_previews`).hide();
        }else {
            $(`#${id}_previews`).show();
            $(`#${id}_href_previews`).attr("href", value_input);
        }
    }
});

$(".input-text-location").each(function () {
    var textarea = $(this);
    var text = textarea.text();
    var div = $('<div id="temp"></div>');
    div.css({
       "width":"530px"
    });
    div.text(text);
    $('body').append(div);
    var divHeight = $('#temp').height();
    div.remove();
    divHeight += 32; 
    this.setAttribute("style", "height:" + divHeight + "px;overflow-y:hidden;");
  }).on("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  });