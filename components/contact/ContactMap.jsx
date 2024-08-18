const ContactMap = () => {
  return (
    <div className="map-area  ">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.314867534815!2d88.60059431495169!3d24.3703476707271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefb2c28527bd%3A0x45e785f19046d881!2sTIC%20LIMITED!5e0!3m2!1sen!2sbd!4v1672725979231!5m2!1sen!2sbd"
          width="100%"
          height="650"
          allowFullScreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
