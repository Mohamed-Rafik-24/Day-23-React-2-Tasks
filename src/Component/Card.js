import React from 'react'

function Card({details}) {
    console.log(details)
  return <>
  <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{details.plan}</h5>
            <h6 class="card-price text-center">${details.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li class={details.userEnabler?"":"text-muted"}><span class="fa-li"><i class={details.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.plan==='PRO'||details.plan==='PLUS'?<b>{details.user}</b>:details.user}</li>
              <li class={details.storageEnabler?"":"text-muted"}><span class="fa-li"><i class={details.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.storage}</li>
              <li class={details.publicProjectsEnabler?"":"text-muted"}><span class="fa-li"><i class={details.publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.publicProjects}</li>
              <li class={details.accessEnabler?"":"text-muted"}><span class="fa-li"><i class={details.accessEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.access}</li>
              <li class={details.privateProjectsEnabler?"":"text-muted"}><span class="fa-li"><i class={details.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.privateProjects}</li>
              <li class={details.phoneSupportEnabler?"":"text-muted"}><span class="fa-li"><i class={details.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.phoneSupport}</li>
              <li class={details.domainEnabler?"":"text-muted"}><span class="fa-li"><i class={details.domainEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.plan==='PRO'?<><b>Unlimited </b>{details.domian}</>:details.domian}</li>
              <li class={details.statusReportsEnabler?"":"text-muted"}><span class="fa-li"><i class={details.statusReportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{details.statusReports}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Card