document.write( '<div id=\'app\'/>' );
const MatchData = [
       {
  "FTeam": "ليستر سيتي",
  "FTeamP": "https://i.postimg.cc/mrj6MrDC/Leicester.png",
  "STeam": "أرسنال",
  "STeamP": "https://i.postimg.cc/jjbGP9h0/Arsenal.png",
  "League": "الدوري الانجليزي",
  "Time": "18:30 GMT",
  "Link": "http://www.beinleague.club/p/bein2tv.html"
},
{
  "FTeam": "ريال مدريد",
  "FTeamP": "https://i.postimg.cc/vTKmmMfd/Real_Madrid.png",
  "STeam": "إيبار",
  "STeamP": "https://i.postimg.cc/PqMrw1Yy/SDEibar.png",
  "League": "الدوري الاسباني",
  "Time": "18:30 GMT",
  "Link": "http://www.beinleague.club/p/bein3tv.html"
},
{
  "FTeam": "بايرن ميونيخ",
  "FTeamP": "https://i.postimg.cc/s2W5dHFX/FCBayern.png",
  "STeam": "بوروسيا دورتمود",
  "STeamP": "https://i.postimg.cc/BnVCG1Xh/BVBDortmund.png",
  "League": "الدوري الالماني",
  "Time": "18:30 GMT",
  "Link": "http://www.beinleague.club/p/bein5tv.html"
},
{
  "FTeam": "نابولي",
  "FTeamP": "https://i.postimg.cc/fR28Trgf/Napoli.png",
  "STeam": "جنوى",
  "STeamP": "https://i.postimg.cc/XYVPvFN4/Genoa.png",
  "League": "الدوري الايطالي",
  "Time": "20:45 GMT",
  "Link": "http://www.beinleague.club/p/bein4tv.html"
},
{
  "FTeam": "برشلونة",
  "FTeamP": "https://i.postimg.cc/RCg68x3d/Barcelona.png",
  "STeam": "سلتا فيغو",
  "STeamP": "https://i.postimg.cc/Hnvr7bGR/Celta_Vigo.png",
  "League": "الدوري الاسباني",
  "Time": "21:00 GMT",
  "Link": "http://www.beinleague.club/p/bein3tv.html"
}
];

if (MatchData === undefined || MatchData.length == 0) {$('#app').after(`<div class='NoMatchesBNL'><p>نعتذر منكم.. لا توجد أي مقابلات مباشرة بتاريخ اليوم</p></div>`);}      

      function MatchTemplate(Match) {
        return `
        <div class="FullList" id="FullCContent"><div class="CFluid"><div class="TodaysMatches">
      <div class="CRow CMatch">
              <div class="Teams">${Match.FTeam}</div>
              <div class="TeamImg"><img src="${Match.FTeamP}" /></div>
              <div class="TeamView"><button id="MatchDate" onclick="GoToWatch('${Match.Link}');setCookie('fteamname', '${Match.FTeam}', 'fteamimg', '${Match.FTeamP}', 'league', '${Match.League}', 'timegmt', '${Match.Time}', 'steamimg', '${Match.STeamP}', 'steamname', '${Match.STeam}', 5)">مشاهدة</button></div>
              <div class="TeamImg"><img src="${Match.STeamP}" /></div>
              <div class="Teams">${Match.STeam}</div>
            </div>
            <div class="MatchesInfo flex"><span class="MatchInfoComMatchition" style="float:right;">${Match.League}</span><span class="MatchInfoTimeUTC" style="float:left;">${Match.Time}</span></div>
          </div>
        </div>
      </div>
        `;
      }
      
document.getElementById("app").innerHTML = `${MatchData.map(MatchTemplate).join("")}`;
