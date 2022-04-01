import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
const image = "./AEC.png";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


export const generatePdf = async (resume) => {
  var docDefinition = {
    pageSize: "A5",
    content: [
      {
        alignment: "justify",
        columns: [
          {
            text: `${resume.fName} ${resume.lName}`,
            bold:true ,
            fontSize:13
          },
          
        ], 
         
      },
      `${resume.jobTitle}`,
      {
        alignment: "justify",

        columns: [
          {
            width: 230,
            text: `\nProfile`,
            bold: true,
          },

          {
            text: "Details",
            bold: true,
          },
        ],
      },
      {
        alignment: "justify",

        columns: [
          {
            width: 230,
            fontSize: 8,
            text: `${resume.profileSummary}`,
          },

          {
            fontSize: 8,
            text: `${resume.address}\n ${resume.dob}\n${resume.email}  ${resume.phone}\n`,
          },
        ],
      },

      {
        alignment: "justify",

        columns: [
          {
            width: 230,
            text: "Experience",
            bold: true,
          },

          { 
            
            fontSize:9,
            text: `\n${resume.department}`,
            bold: true,
          },
        ],
      },
      {
        alignment: "justify",

        columns: [
          {
            width: 230,
            fontSize: 8,
            text: resume.experiences.map(
              (exp) =>
                `Worked as:${exp.jobTitle}\n Under employer:${exp.jobEmployer}\nIn the country:${exp.jobCountry}\n In city:${exp.jobCity}\n Starting Date: ${exp.startDate} Ending Date:${exp.endDate}\n\n`
            ),
          },
          {
            fontSize: 8,
            text: resume.specialisation.map((spc) => `${spc}\n`),
          },
        ],
      },

      {
        alignment: "justify",

        columns: [
          {
            width: 230,
            bold: true,
            text: "Hobbies",
          },

          {
            text: `Skills`,
            bold: true,
          },
        ],
      },
      {
        alignment: "justify",

        columns: [
          {
            width: 230,
            fontSize: 8,
            text: `${resume.hobbies}`,
          },

          {
            fontSize: 8,
            text: `${resume.skills}`,
          },
        ],
      },
      {
        text: `\nReference`,
        bold: true,
      },
      { fontSize: 8, text: `${resume.refrence}` },

      {
        text: `\nEducation`,
        bold: true,
      },
      {
        fontSize: 8,
        text: `${resume.education.edSchool}\n${resume.education.edDegree}\n${resume.education.edYear}\n${resume.education.edCity}`,
      },
    ],
  };

  pdfMake.createPdf(docDefinition).download("Resume");
};
