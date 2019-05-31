import PropTypes from "prop-types";
import { format } from "date-fns";
import backgroundImg from "./common/resources";

const Template = ({ certificate }) => (
  <div
    className="p-2 container"
    style={{
      backgroundImage: `url('${backgroundImg}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      border: "10px solid #787878"
    }}
  >
    <div
      className="p-2"
      style={{
        border: "0px solid #787878"
      }}
    >
      <div>
        <img
          src="/static/images/opencertsdemo.png"
          style={{
            position: "absolute",
            zindex: 999,
            // justifyContent: "center",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            width: "14%",
            height: "auto",
            top: "30%",
            left: "20%"
          }}
        />
      </div>
      <div className="my-5 m-lg-5 text-center">
        <img
          src="/static/images/opencertslogo.svg"
          className="w-100"
          style={{ maxWidth: 600 }}
        />
      </div>
      <div className="h5 mb-4 mb-lg-5 d-flex justify-content-center">
        <i>This is to certify that</i>
      </div>
      <div className="h3 mb-4 mb-lg-5 d-flex justify-content-center">
        <b>{certificate.recipient.name}</b>
      </div>
      <div className="h5 mb-4 mb-lg-5 d-flex justify-content-center">
        <i>has successfully completed the</i>
      </div>
      <div className="h1 mb-4 mb-lg-5 d-flex justify-content-center">
        XYZ Course
      </div>
      <div className="h5 mb-4 mb-lg-5 d-flex justify-content-center">
        <i>certification through training administered by</i>
      </div>
      <div className="d-flex justify-content-between m-3 p-2 mb-5">
        <div className="col-1" />
        <div className="col-5 my-5">
          <img className="w-100" src="/static/images/logo-govtech.png" />
        </div>
        <div className="col-2" />
        {/* <div className="col-4 text-center">
          <img className="w-100" src={certificate.additionalData.signature} />
          <hr className="m-1" />
          <div>
            <b>{certificate.additionalData.signatory}</b>
          </div>
          <div>{certificate.additionalData.signatoryPosition}</div>
        </div> */}
      </div>

      <div className="d-flex flex-row-reverse my-5">
        Dated {format(certificate.issuedOn, "DD/MM/YYYY")}
      </div>
    </div>
  </div>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
