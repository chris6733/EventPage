import { leaders } from "./data-leaders";
import { leadersWithInfo } from "./data-leaders-with-info";

function shuffle(array) {
  return array.concat().sort(() => Math.random() - 0.5);
}

export const data = {
  navs: [
    {
      name: "stepGame",
      time: "12/01 (日) 24:00:00－12/06 (五) 23:59:59",
      status: "活動已結束",
      subNavs: [
        {
          title: "階段一",
          playTipText: `＃累積「50,000 聖誕時代」，可獲得個人頁背景<br>
          ＃前 10 名，可獲得動態開播外框<br>
          ＃前 50 名，最高可獲得<span class="highlight">聖誕獎金 10 萬元</span><br>
          ＃排名 11 - 100 名，可獲得靜態開播外框`,
          leaders: shuffle(leaders),
        },
        {
          title: "階段二",
          playTipText: `＃前 20 名，最高可獲得<span class="highlight">聖誕獎金 3 萬元</span><br>
          ＃前 30 名，可獲得聖誕客製化音樂盒`,
          dates: [
            { name: "11/16", leaders: shuffle(leaders) },
            { name: "11/17", leaders: shuffle(leaders) },
            { name: "11/18", leaders: shuffle(leaders) },
            { name: "11/19", leaders: shuffle(leaders) },
            { name: "11/20", leaders: shuffle(leaders) },
            { name: "11/21", leaders: shuffle(leaders) },
            { name: "週總榜", leaders: shuffle(leaders) },
          ],
        },
        {
          title: "階段三",
          subtitle: "出席資格",
          playTipText: `＃前 30 名，最高可獲得<span class="highlight">總榜加分 70 萬分</span><br>
          ＃此階段結束後，<span class="highlight">總榜前 50 名</span>獲得出席台灣線下活動資格`,
          leaders: shuffle(leaders),
        },
        {
          title: "階段四",
          playTipText: `＃達門檻送線下抽獎票券，最高可獲得 10 張<br>
          ＃前 10 名送線下 Round 1 最高<span class="highlight">分數加成 1.2 倍</span>`,
          leaders: shuffle(leaders),
        },
        {
          title: "活動說明",
        },
      ],
    },
    {
      name: "offlineGame",
      time: "11/08 (五) 18:00:00－12/07 (六) 20:59:59",
      status: "活動已結束",
      subNavs: [
        {
          title: "Round 1",
          playTipText: `＃前 10 名送<span class="highlight">美國戶外曝光版位</span><br>
          ＃完成個人任務送 3 種開播濾鏡「無辜雪人」＋「俏皮耶誕老人」＋「耶誕紅麋鹿」`,
          leaders: shuffle(leadersWithInfo),
        },
        {
          title: "Round 2",
          playTipText: `＃僅計算 Combo 禮物「聖誕糖果槌」，其他禮物計入總榜<br>
          ＃前 20 名主播最高可獲得<span class="highlight">總榜加分 50 萬分</span><br>
          ＃前 10 名主播且粉絲前 5 名，可獲得進場動畫`,
          leaders: shuffle(leadersWithInfo),
        },
        {
          title: "總榜",
          playTipText: `＃前 30 名，冠軍最大獎<span class="highlight">價值 20 萬元</span><br>
          ＃前 10 名可出席美國線下資格，冠軍最大獎<span class="highlight">價值 50 萬元</span>`,
          leaders: shuffle(leadersWithInfo),
        },
        {
          title: "總榜大獎圖",
        },
        {
          title: "活動說明",
        },
      ],
    },
    {
      name: "fanList",
      time: "11/09 (六) 18:00:00－12/07 (六) 20:59:59",
      status: "活動已結束",
      subNavs: [
        {
          title: "階段一",
          playTipText: `＃此階段最高獎金 3 萬元<br>
          ＃日榜天天最高送 1 萬元<br>
          ＃週榜前 30 名送木製音樂盒`,
          dates: [
            { name: "11/8", leaders: shuffle(leaders) },
            { name: "11/9", leaders: shuffle(leaders) },
            { name: "11/10", leaders: shuffle(leaders) },
            { name: "11/11", leaders: shuffle(leaders) },
            { name: "11/12", leaders: shuffle(leaders) },
            { name: "11/13", leaders: shuffle(leaders) },
            { name: "11/14", leaders: shuffle(leaders) },
            { name: "11/15", leaders: shuffle(leaders) },
          ],
        },
        {
          title: "階段二",
          playTipText: `＃前 10 名，可獲得<span class="highlight">聖誕客製化音樂盒＋線下活動出席資格</span>`,
          leaders: shuffle(leaders),
        },
        {
          title: "粉絲總榜",
          playTipText: `＃前 10 名，可獲得<span class="highlight">美國紐約線下活動入場門票乙張</span><br>
          ＃前 10 名，可獲得「胡桃鉗」專屬徽章`,
          leaders: shuffle(leaders),
        },
        {
          title: "活動說明",
        },
      ],
    },
  ],
};
