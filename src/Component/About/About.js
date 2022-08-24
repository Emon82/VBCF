import React from "react";
import what_we1 from "../Image/what_we1.jpg";
import what_we2 from "../Image/what_we2.jpg";
import what_we3 from "../Image/what_we3.jpg";
import what_we4 from "../Image/what_we4.jpg";
import "./about.css";

export default function About() {
  return (
      <div className="container border border-primary">
        <h2 className="title bd">About</h2>
        <div className="row">
          <div className="col-9">
            <p>
              Western Region Bengali School (WRBS) is an ethnic language school
              targeting the second generation Australian Bangladeshis living in
              the north and western suburbs of Melbourne. However, it is open to
              all Australian Bangladeshi living in Victoria. WRBS formed in
              2006, in Hoppers Crossing, Victoria with goals of promoting Bangla
              literacy and numeracy and passing on the rich Bangladeshi cultural
              heritage to our next generation Australian-Bangladeshi. The school
              has come a long way since its inception as an entity that
              currently has 152 enrolled students. To meet the increasing needs
              of our rapidly growing Bangladeshi community here in Victoria,
              over the years WRBS council have taken different initiatives to
              support the community and formed following additional entities
              •Western Region Islamic Class for Children (in operation);
              •Western Region Islamic Class for Adults (in operation);
              <br />
              •Victorian Bangla Mobile Library (in operation);
              <br />
              •Victorian Bangladeshi Sports Club (in operation); and
              <br />
              •Victorian Bangladeshi Women’s Advancement (Proposed).
            </p>
            <p>
              As the activities and tasks have evidenced a sustained growth in
              running various wings, it is now becoming increasingly difficult
              for WRBS to cope up with the community needs and discharge its
              responsibilities to coordinate all other wings as listed above.
              Dear friends, at this moment our community’s dominant demand is to
              have our permanent venue for the school that can also be used as
              community hub. This requires significant contribution from the
              community as well as securing various government funding. At this
              moment we are unable to secure various grants or government
              benefits in the name of WRBS to raise funds for establishing our
              own venue. Similarly, our other wings are unable to apply for
              grants for their activities in the name of WRBS. Also, WRBS is not
              eligible to be registered as tax deductible gift or donation
              recipient. To overcome these barriers, we are in need to bring all
              the entities under one umbrella and form a parent body under which
              all other wings including WRBS will operate more effectively and
              our community’s benefits can be maximised through various
              government funding available. You would be delighted to know that
              in line with these objectives, WRBS council has taken initiative
              to establish a parent organization which will lead and represent
              the greater community to meet up our current and future needs.
              This organization will be totally non political and non religious.
              Accordingly, WRBS council is pleased to announce the name of this
              parent organization as “Victorian Bangladeshi Community Foundation
              (VBCF)” with the goal to “Bring the Community Together” and work
              collaboratively with its component organizations for the benefit
              of Bangladeshi community living in Victoria. VBCF, once
              functional, will take necessary initiative to secure funding to
              establish permanent venue for Western Region Bengali School and
              also for the community as a whole. The proposed venue would also
              serve as social complex/hub for the Bangladeshi community living
              in Victoria - a long cherished dream of the community. It is not
              an easy task; however if we can engage the community, we believe
              we can achieve this goal. WRBS council is therefore, urging the
              community to extend their support and rally behind VBCF.
            </p>
          </div>
          <div className="col-md-3">
            <img className="aboutImage1" src={what_we1} alt="" />
            <img className="aboutImage2" src={what_we2} alt="" />
            <img className="aboutImage3" src={what_we3} alt="" />
            <img className="aboutImage4" src={what_we4} alt="" />
          </div>
        </div>
      </div>
  );
}
