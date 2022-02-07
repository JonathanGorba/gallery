'use strict';


$(document).ready(init);

function init() {
renderProjects();
}

function renderProjects() {
    const projects = getProjects();
    var strHTML = projects.map(function (project,idx) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item ">
         <a class="portfolio-link" data-toggle="modal" onclick="configModal(${idx})" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.pic}" alt="">
         </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.labele}</p>
          </div>
        </div>
        `
    }).join('');
    $('.portfolio-container').html(strHTML);
}

function configModal(idx){
const project = getProjects()[idx];
$('.the-only-modal h2').text(project.name);
$('.the-only-modal .item-intro').text(project.title);
$('.the-only-modal .category').text(project.labele);
$('.the-only-modal .the-image').attr('src',project.pic);
$('.the-only-modal .my-project-link').attr('href',project.url);
}