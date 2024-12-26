import { Fragment, ReactNode } from "react";
import { StoryType } from "../types/main";
import { Link, Typography } from "@mui/material";

const rinne = {
  name: "Rinne Amagi",
  icon: "https://assets.enstars.link/assets/card_full1_2046_normal.png",
};

const niki = {
  name: "Niki Shiina",
  icon: "https://assets.enstars.link/assets/card_full1_2049_normal.png",
};

const himeru = {
  name: "HiMERU",
  icon: "https://assets.enstars.link/assets/card_full1_2048_normal.png",
};

const kohaku = {
  name: "Kohaku Oukawa",
  icon: "https://assets.enstars.link/assets/card_full1_2047_normal.png",
};

function SummaryParagraph({ children }: { children: ReactNode }) {
  return <Typography mt={2}>{children}</Typography>;
}

function NoteParagraph({ children }: { children: ReactNode }) {
  return (
    <Typography component="p" fontSize="0.9rem">
      {children}
    </Typography>
  );
}

export const stories: StoryType[] = [
  {
    title: "niki niisan",
    author: "son",
    authorProfileLink: "https://about.hellogirls.info",
    summary: (
      <Fragment>
        <Typography mt={2}>
          Rinne wakes up from his nap on the sofa when Niki walks into the
          apartment with a handful of grocery bags.
        </Typography>
        <Typography mt={2}>... At least he thinks that's Niki.</Typography>
        <Typography mt={2}>(A 1000 word demo, enjoy!)</Typography>
      </Fragment>
    ),
    chapters: [
      {
        title: "Who are you...?",
        content: (
          <Fragment>
            <p>
              The couch cushions deflated as Rinne deepened into a relaxed pose.
              His right hand grasped a TV remote while his left held his lazy
              cheek in place. It was a Saturday at noon; Crazy:B had no practice
              or events planned and Niki took advantage of this free time to
              pick up a full day’s shift at Cafe Cinnamon, leaving Rinne at his
              apartment to rot away at the sofa. He could hit up the nearby
              pachinko parlor, hang out with his roommates, or even bother
              HiMERU or Kohaku, but his sleepiness weighed down on him.
            </p>

            <p>
              Overwhelming tiredness shouldn’t be a surprise to him, though.
              Rinne recently had started waking up before his early morning
              alarm, the pure exhilaration from starting a new day was enough to
              motivate him awake. This energy carried him through dance practice
              and other idol jobs, and he used the leftover energy to indulge in
              some pachinko when work ended in the evening. The gambler easily
              lost track of time and found himself at the parlor until midnight.
              It was a cycle; rinse and repeat every day.
            </p>

            <p>
              ... He deserved a rest day after all. All of the sleep debt he
              racked up finally came to bite him in the ass. Rinne’s left hand
              slowly shifted lower on his face, his watch fell down his wrist
              and his fingers lost grip of his sharp cheekbones. He didn’t fight
              it, he allowed his body to relax and let the TV anchor’s voice
              cradle him to sleep. His eyelids shut gracefully like draping
              curtains, hiding him away from the real world.
            </p>

            <p>...</p>

            <p>
              Rinne’s groggy eyes were nonchalant when the door creaked open,
              revealing Niki carrying various grocery bags, containing fresh
              produce ready to be seasoned and cooked for a meal. Was it dinner
              time already?
            </p>

            <p>
              “Hey, Niki...” he croaked through his sleepiness. Rinne felt a
              wave of comfort knowing Niki arrived home from work safely, and
              allowed that feeling to drift him away back to sleep.
            </p>

            <p>
              ... At least, he <em>thought</em> that was Niki.
            </p>

            <p>
              Rinne’s eyes woke up more, focused on who he originally assumed
              was his close friend. The familiar man had the same long ponytail
              as Niki, even placed over the same shoulder as his. However,
              unlike Niki’s ponytail that was sloppily tossed to one side, this
              man’s gray locks were neatly placed and caressed over his
              shoulder. While Niki’s overgrown bangs playfully tickled his nose,
              the clone’s bangs were carefully styled. Swept to the side, with
              care to highlight crucial facial features that Niki would
              otherwise disregard.
            </p>

            <p>
              As Rinne focused his eyes to get the man’s whole body in frame he
              noticed the clothes the seemingly familiar man was donning. This
              style was one Rinne always wanted to see his future husband wear
              and a wave of giddiness hit him now that the clothes were in front
              of him.
            </p>

            <p>
              A warm, purple, half buttoned shirt playfully decorated with light
              polka dots giving a fashionably retro vibe. The shirt was neatly
              tucked into his black pants which were trimmed by a professional
              leather belt centered with a round, gold buckle. The parts of his
              upper body that would otherwise be revealed by the shirt’s styling
              was protected by a white undershirt with sleeves that bunched at
              his wrists. Only wearing a black t-shirt and jeans, Rinne was
              completely mesmerized. The more he looked, the more details he
              noticed.
            </p>

            <p>
              The model donned gold accessories, reflecting in Rinne’s
              aquamarine eyes, complimentary colors creating a hypnotizing
              swirl. Large, oval hoop earrings relaxed naturally with the
              stylish man’s warm complexion, balancing the cool tones of his
              frosty gray hair and sapphire eyes. A chain necklace emphasized by
              the white shirt as a backdrop, dangling off his neck effortlessly
              despite the weight of the metal. All of this finished off with
              various gold rings decorating his fingers. These accessories were
              the final pieces that completed the puzzle that is Niki Shiina.
            </p>

            <p>
              However, Rinne couldn’t take his mind off of one glaring flaw,
              tainting this piece of art.
            </p>

            <p>That wasn’t Niki. Who the--</p>

            <p>
              “--hell are <em>you</em>...?”
            </p>

            <p>
              The harsh tone emerging from the unfamiliar man caught Rinne off
              guard, immediately turning on the leader’s defense instincts.
            </p>

            <p>
              “I could say the same to you!” Rinne refuted. “Bargin’ in and
              bein’ rude without even saying hello, who do you think you are?!
              Do you even live here?”
            </p>

            <p>
              The stranger’s eyes went wide and his features distorted with
              offense. His likeness to Niki caused Rinne’s stomach to drop; he
              would never want to be the reason his best friend made that
              expression. Yet, he maintained a high guard as the imposter was
              ready to attack.
            </p>

            <p>
              “What are you talking about? This is <strong>MY</strong> house.”
            </p>

            <p>He took a short breath.</p>

            <p>“Well, it’s the house that I share with my brother, Niki...”</p>

            <p>
              The man at the door paused, eyes darting around searching for the
              man whose name he just uttered.
            </p>

            <p>
              “Where is he? Did you do something to him?? I can call the police,
              y'know, tell them a stranger broke into my house!” He shot an
              accusatory finger at Rinne. “You better tell me where Niki is!”
            </p>

            <p>
              “<strong>WILL YA CALM DOWN?!</strong>” Rinne finally bolted up
              from the sofa to approach Niki’s alleged brother. “Niki’s at work!
              Nothing happened to him, okay?!”
            </p>

            <p>
              He blurted that out to stop the brother from panicking, but
              Rinne’s eyes narrowed and his brows furrowed once he realized
              something wasn’t right.
            </p>

            <p>
              “... He never mentioned having a brother, though,” the words
              slipped from his lips. Niki always enlightened Crazy:B with the
              many places he traveled to with his parents as a kid. These
              stories left Kohaku and Rinne himself feeling a pit in their
              hearts from wanderlust; a part of them wished they could explore
              the vast world just like Niki. However, nowhere in his words did
              the scatterbrained chef ever leave room for a brother to fit into
              the picture.
            </p>

            <p>
              Niki’s nameless brother raised an eyebrow, curious about what
              Rinne just stated. “Oho, and who are you to say that? You think
              you know my own family better than me? You’re just a stranger.”
            </p>
          </Fragment>
        ),
      },
    ],
    characters: [
      rinne,
      niki,
      {
        name: "Original Character",
      },
    ],
    tags: ["Alternate Universe", "Niki has a twin brother"],
    note: (
      <Fragment>
        <Typography component="p" fontSize="0.9rem">
          this mini-fic was inspired by{" "}
          <Link href="https://twitter.com/niki_pan08">niki_pan08</Link>'s au
          where niki has an older twin brother who looks like his beta design!
        </Typography>
        <Typography component="p" fontSize="0.9rem">
          i'm only really capable of writing exposition and have never really
          written a fic with plot before so... i hope you enjoy?
        </Typography>
      </Fragment>
    ),
  },
  {
    title: "We Love You",
    author: "son",
    authorProfileLink: "https://about.hellogirls.info",
    chapters: [
      {
        title: null,
        content: (
          <Fragment>
            <p>
              Months after the MDM, Crazy:B slowly established themselves as a
              formidable unit. They weren’t the spitting image of a perfect idol
              group, but they garnered fans that loved them for what they
              brought to the table; thrilled by their improvised dances and who
              screamed loud to the fun lyrics of their songs.
            </p>
            <p>
              With this newfound fan base, Cosmic Productions considered Crazy:B
              ready for an event that engaged with their fans: They would
              perform a casual live in a small venue, nestled into a cozy
              environment that eased them into a meet and greet.
            </p>
            <p>
              This left the group with anticipation in their stomachs. Crazy:B,
              specifically Rinne and Kohaku, picked up on their fans’
              personalities based on social media.
            </p>
            <p>
              Rinne, despite being the most controversial member of the group,
              had devotees of his own. As Crazy:B grew in popularity, more
              old-time admirers from his past idol days recognized him on stage
              in Crazy:B and followed the group to support Rinne’s budding idol
              journey.
            </p>
            <p>
              Of course, with his rise in popularity, he also gained new
              supporters who saw his rebellious attitude as a breath of fresh
              air that also pierced their hearts like a blistering arrow. A
              dangerous arrow with double-edge; Many traditional idol
              enthusiasts failed to stomach Rinne’s presence and harassed him on
              social media. The gambler fueled the fire for the sake of
              attention, although his dedicated fans ran to his defense and
              screamed obscenities at anyone who attacked him.
            </p>
            <p>
              HiMERU was marketed as the sex appeal of Crazy:B. Many people were
              allured by his provocative moves on stage and baritone voice that
              melted in their ears. His eyes, while dull of emotion, were sultry
              and drew the crowd in. He rinsed himself in the attention which
              made his performances that much more captivating.
            </p>
            <p>
              His most dedicated fans looked past his perfect mask and dug
              deeper into the man titled HiMERU. To them, HiMERU was a library
              waiting to be discovered, filled with dusty books wielding who he
              truly is. They glued themselves to every performance, every
              interview, every radio show, to even reach their fingertips closer
              to his true identity.
            </p>
            <p>
              HiMERU told the rest of his unit that he didn’t care how outsiders
              perceived him; he knew he was already the perfect idol. When his
              peers shifted their gazes from him, he’d keep track of what every
              stranger said about his precious persona he worked hard to curate.
            </p>
            <p>
              As Kohaku was an avid user of social media, it was only natural
              that he came across posts about himself. Many of his fans doted on
              him, they felt maternal towards him as the youngest member of
              Crazy:B, as well as the smallest. It didn’t help that he donned
              adorable, cotton candy pink hair.
            </p>
            <p>
              Kohaku <em>hated</em> this attention. He desired to be seen as
              equal to the rest of his peers, not as a half-pint. During dance
              practices, he imitated HiMERU to pick up on his natural sexiness.
              The execution, however, made him cuter to his fans. He resembled a
              baby duck following his parents.
            </p>
            <p>
              Fortunately, Kohaku was not the type to react to what people say
              about him online. Unlike Aira, who happily defended Kohaku’s image
              online for him. Kohaku worried about his friend becoming a younger
              version of Rinne.
            </p>
            <p>And then there was Niki.</p>
            <p>
              Niki avoided social media, he preferred researching new recipes
              and updating his food blog instead. He wasn’t aware of the extent
              of how he was perceived online.
            </p>
            <p>
              The anticipation the rest of Crazy:B felt in their stomachs wasn’t
              because of their own fans, they anticipated Niki’s fans. Although
              he didn’t have as many fans as HiMERU, Niki had the most dedicated
              fans out of the whole unit.
            </p>
            <p>
              Rinne almost dropped his phone from shock when he discovered Niki
              had an established fan club, titled “The Shiibees”, with a
              president, secretary, and all other necessary members of
              leadership. The fan club shared images of Niki performing in
              lives, detailing how they loved seeing him smile and would do
              anything to protect him.
            </p>
            <p>
              While Rinne agreed with the club’s mission – He also wanted Niki
              to shine, Rinne was the one who encouraged him to be an idol,
              after all – he held back his protective urges. He was well aware
              that obsessive fans can lead to serious problems in the future;
              problems he did not want Niki to experience. Rinne opened the
              Shiibees’ official Twitter account and read their bio.
            </p>
            <p>
              “The Shiibees are a group of ‘Crazy:B’ fans who are specifically
              dedicated to the unit’s secret weapon, Shiina Niki. We all share a
              love for Shiina and gather to discuss what we like about him. We
              post pictures of Shiina daily.”
            </p>
            <p>
              Rinne smirked, amused that they used the “secret weapon” title he
              gifted Niki. The club’s shared love felt elementary, yet the
              innocence of their posts warmed his heart. People came together to
              bond over their love for Niki. They replied to each other's posts
              about him and even shared pictures of each other together at
              Crazy:B lives. Rinne’s cheeks lifted with the realization his life
              wasn’t the only one saved by Niki.
            </p>
            <p>
              He found the club president’s Twitter account on their official
              website. Rinne chuckled when he saw they followed him on Twitter.
              As expected from a fan of Crazy:B.
            </p>
            <p>
              The president posted very frequently, they spoke energetically
              online and their enthusiasm even spread to those who were not
              devoted to Crazy:B. They regularly reacted to official Crazy:B
              announcements in a dramatic way that made their emotions loud and
              clear. Rinne couldn’t help but imagine what they would be like in
              real life, if their energy would burst out and force Niki to
              realize he is loved and has always been loved. He looked up from
              his phone in thought.
            </p>
            <p>“Oh, Niki. You’re in good hands.”</p>
          </Fragment>
        ),
      },
      {
        title: null,
        content: (
          <Fragment>
            <p>“YEAH!”</p>
            <p>
              The sound of success reverberated through the room as Rinne and
              Niki’s hands loudly united for a high five after finishing their
              live performance. Kohaku gave Rinne a more gentle high five and
              HiMERU ignored the high five Rinne offered him. Rinne hugged
              HiMERU and Kohaku by the shoulders.
            </p>
            <p>
              “Great job, guys! Another stunning performance from Crazy:B. Think
              we’re all ready to handle the Meet ‘n Greet after this?”
            </p>
            <p>
              The rest of the group sighed in response. It was the only way to
              let out the excitement from their bodies. The entire time they
              were on stage, they prepared themselves for the meet and greet
              event that would follow. It was the first time Crazy:B would meet
              their fans face to face. Their sweat from their previous live
              blended in with their sweat of excitement.
            </p>
            <p>
              “Of course,” HiMERU responded. “HiMERU has experience
              communicating with fans, so he will handle this event with ease.
              He does wonder if Amagi will do the same.
            </p>
            <p>“Oi, MERUMERU, you think you can get away with snarking me?”</p>
            <p>
              Rinne attempted to get revenge on HiMERU by rustling his ring
              littered knuckles on top of the blue haired man’s carefully styled
              locks , but HiMERU swiftly dodged it.
            </p>
            <p>
              Kohaku, on the other hand, had a pensive look on his face. His
              focused eyes showed how deeply he thought about his potential
              interactions with his fans.
            </p>
            <p>
              “I’ve seen how they are online,” He thought out loud. “They’re
              nice people, f’sure. I just hope they’ll treat me like my age and
              not some kid who needs ta be doted on.”
            </p>
            <p>
              Rinne laughed in the younger one’s face and pointed an accusatory
              finger at him. “Hah? At least your fans like you! We got people
              online trying to pick fights with li’l ol’ Rinne-kun every five
              minutes. You’re taking the good life for granted, Kohaku-chan.”
            </p>
            <p>
              Niki whipped to face Rinne, ready to retort. “People wouldn’t
              fight with you if you just behaved online for once! Do <em>I</em>{" "}
              need to treat <em>you</em> like a kid and revoke your online
              privileges?”
            </p>
            <p>
              “You’re not in charge of me,” Rinne rushed towards Niki and yanked
              on his ponytail as hard as he could. “Now, shaddup! Unless, you
              want me to rip your ponytail off your head?”
            </p>
            <p>
              Niki whimpered in response as he begged Rinne to free him and his
              locks. Suddenly, a realization hit Rinne and he quickly released
              Niki’s hair.
            </p>
            <p>
              “Oops, I shouldn’t ruin your precious hair. Your fan club will
              unleash their wrath on me if I accidentally rip off your
              ponytail,” Rinne gently stroked Niki’s hair as a playful apology.
              Meanwhile, Niki blinked in confusion.
            </p>
            <p>
              “Fan club? Who? Me? Huh? What are you saying? Rinne-kun, are you
              dehydrated? Do you need water? I bet our live just now exhausted
              you, so now you’re saying strange things.”
            </p>
            <p>
              “KYAHAHA! You’re so clueless. Don’tcha know you have a fan club?
              It’s practically its own government! Hey, Niki. Why don’tcha teach
              me how to charm the audience the way you do? I want my own
              government, as well!”
            </p>
            <p>“Oh… Why you– Stop speaking nonsense!”</p>
            <p>
              Niki chased Rinne around the room as revenge for messing with his
              head. HiMERU and Kohaku exchanged knowing glances, then Kohaku
              shifted his eyes to the floor. HiMERU understood that as a cue to
              step up. He separated the agitated men, then gently brought Niki
              to his attention.
            </p>
            <p>
              “Shiina,” HiMERU paused. “Amagi is actually not speaking nonsense
              for once.”
            </p>
            <p>
              Rinne shot HiMERU a mean glance. HiMERU cleared his throat, then
              continued.
            </p>
            <p>
              “Amagi actually brought the fan club to Oukawa and HiMERU’s
              attention before the live today. HiMERU was quite shocked to see
              how dedicated your fans are.”
            </p>
            <p>
              Niki blinked at HiMERU, unable to form words. HiMERU was the more
              sensible one, yet he affirmed Rinne’s teases? Niki’s pensive eyes
              darted away from the golden eyed man.
            </p>
            <p>
              Kohaku reached his phone out of his back pocket and opened the
              Shiibee’s profile. He walked up to Niki and revealed his phone to
              him.
            </p>
            <p>
              “See, check this out,” Kohaku swiped up on his screen to show Niki
              more of the profile. “They call themselves the Shiibees. It looks
              like yer energy on stage is contagious and spread to these people
              s’now they’re showing their gratitude fer you online. See, look at
              this picture someone got of you at our live last week. Yer smile’s
              so wide, y’look like a real idol.”
            </p>
            <p>
              Niki was still speechless as he skimmed through the posts in front
              of him. The kind words that described his endless amounts of
              energy, his blissful smile, his unknown charisma; they blessed his
              eyes and caused them to shine. Their words hugged him and warmed
              him up, dusting his cheeks soft pink. His mouth slightly opened
              silently before he finally let out words.
            </p>
            <p>
              “So, my fans like me... Because I make them smile?” Niki quietly
              chuckled and scratched the back of his neck. “Nahaha... Is it that
              simple? They don’t really know me, though. They shouldn’t get
              their hopes up too high.”
            </p>
            <p>
              Kohaku smiled at Niki with his eyes. “Unlike HiMERU-han’s fans,
              who love diggin’ into his life, yer fans aren’t invested in that
              stuff. They’re just satisfied with seein’ ya smile.”
            </p>
            <p>
              HiMERU brushed off Kohaku’s comment about his fans and settled to
              laugh silently with his arms crossed. Meanwhile, Rinne hugged Niki
              from behind and brought the smaller man closer to him.
            </p>
            <p>
              “Gyahaha, y’better be careful, Niki! The president of your fan
              club is a bundle of energy who’s obsessed with you! Let’s hope
              y’can handle them at the meet n’ greet,” Rinne roughly smacked
              Niki’s back. Niki rolled his eyes in response, but remained in his
              head. He failed to understand how anyone could be satisfied with
              just his smile. That was something anyone can do, Niki wasn’t
              special.
            </p>
            <p>
              He sighed and grabbed the towel HiMERU offered him to wipe himself
              down after their recent concert. His neck tensed under his choker
              as he swallowed hard. Niki’s fists clenched tight. Images of fans
              gathered to meet him flashed in his mind. People ecstatic to shake
              his calloused hands. He didn’t understand why -- despite being a
              good-for-nothing idol, despite refusing to be an idol, despite
              neglecting his idol duties -- anyone wanted to see him.
            </p>
            <p>
              Niki forced his mind to stop running. If he stayed quiet, he would
              worry his friends. That was the last thing he wanted; to be a
              burden.
            </p>
            <p>
              Gray ribbons of hair flowed as he lifted his head up. Rings
              embracing his fingers shined when he relaxed his hands. His mouth
              creaked to fix a familiar smile on his face and he looked at his
              unit mates with determination.
            </p>
            <p>“Mhm, I can handle it! I’m excited to meet them, aha~”</p>
          </Fragment>
        ),
      },
    ],
    characters: [niki, rinne, himeru, kohaku],
    tags: [
      "Character Study",
      "Low Self-Esteem",
      "Discussions of in-universe fans",
      "niki is loved",
    ],
    summary: (
      <Fragment>
        <SummaryParagraph>
          Crazy:B is anticipating their first event interacting with fans. Niki
          has no clue what is in store for him.
        </SummaryParagraph>
        <SummaryParagraph>
          A fic studying Crazy:B and their interactions with their fans.
        </SummaryParagraph>
      </Fragment>
    ),
    note: (
      <Fragment>
        <NoteParagraph>
          hi so this was originally a yume fic, but it turned out so well i
          removed the yume parts and now here we are. enjoy!
        </NoteParagraph>
      </Fragment>
    ),
  },
];
