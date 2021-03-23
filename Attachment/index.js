import React from "react";
export const Attachment = ({ podcasts }) => {
  const podcastSubscriptions = Object.keys(podcasts);
  return (
    <>
      <amp-story-page-attachment
        layout="nodisplay"
        data-cta-text="Podcast jetzt abonnieren"
      >
        <div className="abo">
          <h2>Abonnieren</h2>
          <p className="attachment">NFFS gibts auf folgenden Podcast-Plattformen</p>
          {podcastSubscriptions.map((sub) => (
            <p key={sub} className="attachment">
              <a href={podcasts[sub].show}>
                <amp-img
                  src={podcasts[sub].image}
                  width="268"
                  height="68"
                  layout="responsive"
                ></amp-img>
              </a>
            </p>
          ))}
          <p className="attachment">
            Einfach draufklicken und in der App abonnieren um nichts zu
            verpassen!
          </p>
        </div>
      </amp-story-page-attachment>
    </>
  );
};

export default Attachment;
