import React from "react";

const commentaire = [
  {
    id: Math.random(),
    name: "Skill Mendset",
    comment: "c'est très interessant",
    photoprofile:
      "https://yt3.ggpht.com/_oubnsm6WBQmiKDQ0OWpy4hyIDiawxRRN8s-E6wyUQQInCN0eANhN_GoL98HixdkTlkKm_jo=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: Math.random(),
    name: "Oussema Mokni",
    comment: "Merci",
    photoprofile:
      "https://yt3.ggpht.com/_oubnsm6WBQmiKDQ0OWpy4hyIDiawxRRN8s-E6wyUQQInCN0eANhN_GoL98HixdkTlkKm_jo=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: Math.random(),
    name: "Ali Ben Salah",
    comment: "merci bonne formation",
    photoprofile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: Math.random(),
    name: "Rania malla",
    comment:
      "Really really PROUD of you! I am so glad to see such a thing in Algeria. Keep going ...",
    photoprofile:
      "https://yt3.ggpht.com/_oubnsm6WBQmiKDQ0OWpy4hyIDiawxRRN8s-E6wyUQQInCN0eANhN_GoL98HixdkTlkKm_jo=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: Math.random(),
    name: "Ahmed Mallouli",
    comment: "Comment on peut rejoindre ?",
    photoprofile:
      "https://yt3.ggpht.com/pclZSflOI0gXxhE0Y6TPSZHNjcJWLQ8Mj1n1l_CA3hlitxmrcTD_J4N0zjz5H5D8znujNEsUJQ=s88-c-k-c0x00ffffff-no-rj",
  },
];

const Channel = {
  logochannel:
    "https://yt3.ggpht.com/ytc/AMLnZu_n0r1_fImmriHyUIWxwUpWymZrXTbGlYHurZ6txvBGydA-hbR5nWwASb6u9kzD=s88-c-k-c0x00ffffff-no-rj",
  ChannelName: "Go My Code",
  SubNumber: "5.24k",
};

const CommentPart = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <img
          style={{ height: "40px", borderRadius: "100%", margin: "0px 15px" }}
          src={Channel.logochannel}
          alt="chanlogo"
        />

        <input
          style={{
            width: "800px",
            border: "none",
            outline: "none",
            borderBottom: "1px solid black",
          }}
          type="text"
          placeholder="Ajoutez un commentaire"
        />
      </div>

      {commentaire.map((el) => (
        <div key={el.id} style={{ display: "flex", margin: "20px 15px" }}>
          <img
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
            src={el.photoprofile}
            alt="photoo"
          />
          <div style={{ width: "700px", margin: "0px 20px" }}>
            <h4 style={{ fontSize: "13px", fontWeight: "bold" }}>{el.name}</h4>
            <p style={{ fontSize: "12px", marginTop: "-5px" }}> {el.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentPart;
