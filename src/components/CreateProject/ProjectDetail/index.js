import React from "react";

function ProjectDetail(props) {
  const { params } = props.match;
  const { id } = params;

  return (
    <div className="project-detail container">
      <div className="project-detail__card">
        <div className="project-detail__card__title">{`Project - ${id}`}</div>
        <div className="project-detail__card__content">
          <p>
            3rd September, 2amIncididunt sunt velit veniam elit veniam magna
            occaecat. Aliquip do excepteur magna consequat laboris amet et.
            Adipisicing consectetur ea laborum ex enim cillum pariatur et.
            Tempor commodo non sunt eiusmod ex veniam aliqua incididunt fugiat
            do culpa irure cillum magna. Magna laboris cupidatat nisi aute
            exercitation. Ullamco do fugiat dolore ad. Voluptate ullamco
            incididunt sit exercitation fugiat. Ea id aute id nulla tempor ad
            fugiat ipsum aliquip nostrud culpa. Consectetur magna anim eiusmod
            consectetur mollit tempor. Magna incididunt irure deserunt labore
            commodo id ex irure. Tempor cillum anim dolore in aliquip nostrud
            do. Est ad aliqua minim labore occaecat elit ipsum consectetur non
            velit. Ex ipsum sit sit velit consectetur officia aliquip officia ea
          </p>
        </div>
        <div className="project-detail__card__footer">
          <p>3rd September, 2am</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
