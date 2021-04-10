import React from "react";
export const Attachment = ({ podcasts, cta }) => {
  const podcastSubscriptions = Object.keys(podcasts);
  const { ctaSubscribe, ctaDescribe, ctaInvite } = cta;

  return (
    <>
      <amp-story-page-attachment
        layout="nodisplay"
        data-cta-text="Podcast jetzt abonnieren"
      >
        <div className="abo">
          <h2>{ctaSubscribe}</h2>
          <p className="attachment">{ctaDescribe}</p>
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
          <p className="attachment">{ctaInvite}</p>
        </div>
      </amp-story-page-attachment>
    </>
  );
};

export default Attachment;
