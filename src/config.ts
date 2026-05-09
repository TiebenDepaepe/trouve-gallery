export interface SiteConfig {
  language: string
  title: string
  description: string
  brandName: string
}

export interface HeroConfig {
  titleText: string
  subtitleLines: string[]
  ctaLabel: string
  roomLabel: string
  /** Path from public/, e.g. "/images/hero.jpg". Empty → black background. */
  fluidImagePath: string
}

export interface WorkItem {
  id: string
  title: string
  type: string
  status: string
  metrics: string
  /** Path from public/, e.g. "/images/work-1.jpg". MUST be a topic-relevant image (generated via generate_image, or a downloaded relevant asset). Do NOT point this at placeholder services like picsum.photos, unsplash random, or lorem.space. */
  image: string
  artist: string
  location: string
  medium: string
  article: string
}

export interface GalleryConfig {
  eyebrowLabel: string
  titleLines: string[]
  stats: { label: string; value: string }[]
  sideLabel: string
  works: WorkItem[]
}

export interface InstantConfig {
  /** 3 text lines animated in sequence. Index 0 big serif, 1 assembly, 2 caption. */
  textLines: [string, string, string] | string[]
  /** Path from public/, e.g. "/videos/ambient.mp4". Empty → black background. */
  videoPath: string
  roomLabel: string
}

export interface NavLink {
  label: string
  href?: string
}

export interface FooterConfig {
  brandText: string
  taglineLines: string[]
  navigationHeading: string
  navigationLinks: NavLink[]
  contactHeading: string
  contactLinks: NavLink[]
  copyright: string
  creditText: string
}

export interface WorkDetailConfig {
  backLabel: string
  artistLabel: string
  locationLabel: string
  mediumLabel: string
  backToGalleryLabel: string
  metaRoomSuffix: string
  footerNote: string
  notFoundTitle: string
  notFoundLink: string
}

export const siteConfig: SiteConfig = {
  language: "nl",
  title: "Trouvé Kunstgalerie",
  description: "Een galerie van gevonden voorwerpen — gemengde media, sculptuur en de poëzie van assemblage in Gent.",
  brandName: "Trouvé",
}

export const heroConfig: HeroConfig = {
  titleText: "TROUVÉ",
  subtitleLines: [
    "Een galerie van gevonden voorwerpen —",
    "gemengde media, sculptuur en de poëzie van assemblage",
    "in het hart van Gent.",
  ],
  ctaLabel: "Betreed de Tentoonstelling",
  roomLabel: "RUIMTE 01 // DE DREMPEL",
  fluidImagePath: "/images/hero-landscape.jpg",
}

export const galleryConfig: GalleryConfig = {
  eyebrowLabel: "RUIMTE 02 // GALERIE",
  titleLines: ["Geselecteerde", "Werken"],
  stats: [
    { label: "COLLECTIE", value: "16 WERKEN" },
    { label: "MEDIA", value: "GEMENGDE MEDIA" },
    { label: "OORSPRONG", value: "GENT" },
    { label: "OPGERICHT", value: "2019" },
    { label: "KUNSTENAARS", value: "12" },
    { label: "STATUS", value: "TENTOONGESTELD" },
  ],
  sideLabel: "GALERIE::COLLECTIE",
  works: [
    {
      id: "TR-001",
      title: "HORIZONLIJNEN",
      type: "gemengde-media-paneel",
      status: "TENTOONGESTELD",
      metrics: "2023",
      image: "/images/work-01.jpg",
      artist: "Youssef El Amrani",
      location: "Gent",
      medium: "Gemengde media op houten paneel, 120 × 90 cm",
      article: "Horizonlijnen verbreekt het landschap in zes onderscheidende banen, elk fungerend als een eigen microklimaat van kleur en textuur. De kunstenaar verwerkt sculpturale elementen rechtstreeks in het geschilderde oppervlak — kleine witte kubussen die lezen als architectonische ingrepen, fragmenten drijfhout die de compositie verankeren in materiële realiteit.\n\nHet palet beweegt van diep karmozijn door turquoise wateren naar gouden aarde, een horizontale reis die de overgang van zonsopgang naar zonsondergang langs de Marokkaanse kust weerspiegelt. El Amrani's techniek van verf in lagen opbouwen en deze daarna gedeeltelijk terugschuren, creëert een verweerd patina dat suggereert dat tijd zelf het ware medium is.\n\nDit werk werd voor het eerst tentoongesteld in de Jardin Majorelle pop-up galerie in 2023, waar bezoekers het beschreven als \"een kaart die je kunt voelen in plaats van lezen.\"",
    },
    {
      id: "TR-002",
      title: "AQUARIUM",
      type: "assemblage",
      status: "TENTOONGESTELD",
      metrics: "2022",
      image: "/images/work-02.jpg",
      artist: "Fatima Zahra Benali",
      location: "Essaouira",
      medium: "Olieverf op canvas met keramiek en hout, 80 × 60 cm",
      article: "Aquarium verkent de grens tussen schilderkunst en sculptuur door middel van een vierkleurige veldcompositie omsloten in een sierlijke vintage lijst. Benali ondermijnt de verguldsel grandeur van de lijst door het canvas te doorboren met een klein turquoise kistje dat in de ruimte van de kijker uitsteekt.\n\nIn het kistje zweeft een handgeschilderde keramieken vis in geschilderde duisternis — een knipoog naar de traditie van het stilleven die transformeert in iets levends, iets dat lijkt te ademen achter glas. De vier kleurblokken (hemelsblauw, amber, sienna, mos) lezen als vereenvoudigde elementen: water, zon, aarde en leven.\n\nBenali vond de lijst op een rommelmarkt in de medina van Essaouira; de bestaande slijtage en patina werden integraal onderdeel van het verhaal van gevonden schoonheid in het werk. Het werk vraagt: wie observeert wie?",
    },
    {
      id: "TR-003",
      title: "DIEPE_STROMING",
      type: "gemengde-media",
      status: "VERZAMELD",
      metrics: "2021",
      image: "/images/work-03.jpg",
      artist: "Omar Idrissi",
      location: "Casablanca",
      medium: "Olieverf en brons op canvas, 100 × 100 cm",
      article: "Diepe Stroming dompelt de kijker onder in een oceanische afgrond gerenderd in lagen blauwgrijze impasto. Idrissi bouwt het oppervlak op met een paletmes, waardoor hij ribbels en valleien creëert die licht vangen als echte golven. De compositie is doormidden gesneden — diep indigo aan de linkerkant, verweerde neutralen aan de rechterkant — wat twee dieptes, twee drukken, twee zijnstoestanden suggereert.\n\nDe sculpturale ingreep is een klein gegoten bronzen figuur bevestigd aan een turquoise blok, dat lijkt te zwemmen of te zweven over het geschilderde oppervlak. Het patina van de figuur weerspiegelt de geoxideerde tonen op de achtergrond, waardoor de grens tussen wat geschilderd is en wat geplaatst is vervaagt.\n\nIdrissi, een voormalig marien bioloog, brengt wetenschappelijke precisie naar abstracte expressie. Het werk werd in 2022 verworven door een privéverzamelaar en is in langdurige bruikleen aan Trouvé voor deze tentoonstelling.",
    },
    {
      id: "TR-004",
      title: "KUSTLIJN",
      type: "gemengde-media",
      status: "TENTOONGESTELD",
      metrics: "2024",
      image: "/images/work-04.jpg",
      artist: "Laila Moussaoui",
      location: "Agadir",
      medium: "Olieverf op canvas met gevonden voorwerpen, 140 × 100 cm",
      article: "Kustlijn vangt het precieze moment waarop Atlantische golven het Saharazand ontmoeten — een botsing van twee uitgestrekte systemen weergegeven in dikke, tactiele verf. Moussaoui verdeelt het canvas helder: diep turquoise oceaan links, gouden terrein rechts, gescheiden door een schuimwitte lijn die trilt van energie.\n\nDe driedimensionale elementen transformeren het schilderij tot een installatie. Een keramieken zeemeeuw zit op geometrische blokken aan de waterkant. Langs de rechterrand wijzen kleurrijke pijlmarkeringen — gevonden in een visserijwinkel — naar binnen als navigatiehulpmiddelen of waarschuwingen.\n\nMoussaoui werkt en plein air aan de kust van Agadir, waarbij ze wind en zand toelaat als toevallige medewerkers. Het resultaat is een werk dat de fysieke herinnering aan zijn eigen totstandkoming draagt — zout, gruis en zonlicht ingebed in elke laag.",
    },
    {
      id: "TR-005",
      title: "TERRA_INCOGNITA",
      type: "olieverf-op-canvas",
      status: "TENTOONGESTELD",
      metrics: "2023",
      image: "/images/work-05.jpg",
      artist: "Karim Fathi",
      location: "Gent",
      medium: "Olieverf op canvas, 90 × 70 cm",
      article: "Terra Incognita brengt een denkbeeldig gebied in kaart door middel van een mozaïek van onregelmatige kleurblokken, elk gescheiden door dikke impasto-richels die lezen als grenzen, rivieren of breuklijnen. Fathi's palet is uitbundig — smaragd, oker, magenta, kobalt, goud — wat een land van onmogelijke vruchtbaarheid suggereert.\n\nHet centrale blok bevat een ruw bladgouden oppervlak, een zon of een schat, afhankelijk van de kijkhoek. Het raster is opzettelijk imperfect: sommige blokken vloeien over in buren, andere zijn scherp afgebakend, wat een spanning creëert tussen orde en chaos die de ervaring weerspiegelt van het navigeren door een onbekende plek.\n\nDe titel verwijst naar de middeleeuwse praktijk om onverkende regio's op kaarten te markeren met de zin \"hier zijn draken.\" Fathi nodigt de kijker uit om zijn eigen geografie op het werk te projecteren, om vertrouwde vormen te vinden in het abstracte terrein.",
    },
    {
      id: "TR-006",
      title: "KRUISPUNTEN",
      type: "acrylverf-op-canvas",
      status: "TENTOONGESTELD",
      metrics: "2022",
      image: "/images/work-06.jpg",
      artist: "Nadia Alami",
      location: "Rabat",
      medium: "Acrylverf op canvas, 160 × 80 cm",
      article: "Kruispunten is een studie in geometrische zuiverheid — rechthoeken van grijs, bordeaux, cyaan en goud gerangschikt op een crèmekleurige ondergrond met de precisie van architectonisch tekenwerk. Alami's harde-kant techniek elimineert zichtbare penseelstreken en creëert een oppervlak dat aanvoelt als gedrukt, machinaal vervaardigd of op een of andere manier vooraf bepaald.\n\nToch ademt de compositie. Smalle stroken roze en oranje onderbreken de grotere blokken als geheime doorgangen. Een horizontale band saliegroen doorkruist het onderste derde deel en verbindt anders geïsoleerde elementen. Het werk beloont aanhoudend kijken: relaties verschuiven, hiërarchieën lossen op en hervormen zich.\n\nAlami, opgeleid als architect voordat ze zich tot schilderen wendde, behandelt canvas als een terreinplan. Ze heeft dit werk beschreven als \"een stad zonder mensen — de ruimtes waar we doorheen bewegen, wachtend om bewoond te worden.\"",
    },
    {
      id: "TR-007",
      title: "DE_WAARNEMER",
      type: "terracotta-sculptuur",
      status: "TENTOONGESTELD",
      metrics: "2024",
      image: "/images/work-07.jpg",
      artist: "Samira Bennani",
      location: "Fez",
      medium: "Terracotta, draad en verf, 40 × 30 × 25 cm",
      article: "De Waarnemer is een sculpturaal portret dat conventionele gelijkenis weigert. Bennani vormt terracotta tot een vereenvoudigd hoofd en transformeert het vervolgens door ingrepen: een bril met draadmontuur die intellect suggereert, een geschilderde snor die humor introduceert, en wijde blauwe ogen die met verontrustende directheid staren.\n\nDe figuur is gemonteerd op een ruw houten paneel, waardoor het wordt verheven van sculptuur tot icoon. Het terracotta-oppervlak behoudt vingerafdrukken en gereedschapssporen — bewijs van de hand van de kunstenaar dat contrasteert met de mechanische precisie van de draadbril. Een groen stoffen element bij de hals suggereert zowel kraag als landschap.\n\nBennani's werk put uit de traditie van Marokkaanse figuratieve keramiek terwijl het zich uitstrekt naar hedendaags terrein. De Waarnemer kijkt naar de kijker, en creëert een lus van observatie die afwisselend amusant, aangrijpend en lichtjes onheilspellend is.",
    },
    {
      id: "TR-008",
      title: "GOUDEN_UUR",
      type: "olieverf-op-canvas",
      status: "NIEUW",
      metrics: "2024",
      image: "/images/work-08.jpg",
      artist: "Amine Rachidi",
      location: "Gent",
      medium: "Olieverf op canvas, 100 × 100 cm",
      article: "Gouden Uur vangt het vluchtige moment waarop het woestijnzonlicht de lucht gesmolten maakt. Rachidi brengt olieverf aan met buitengewone dikte — de impasto in de lucht reikt enkele millimeters, vangt werkelijke schaduwen van galerieverlichting en creëert een tweede, onbedoelde compositie die in de loop van de dag verandert.\n\nHet onderste deel lost zich op in groengrijze heuvels, met een textuur die verschuift van wervelende wolken naar aardgebonden struikgewas. Een dunne horizonlijn van gebrande sienna scheidt de twee rijken, een naad tussen transcendentie en grond. De kunstenaar werkte uitsluitend tijdens werkelijke gouden uren, en ving de emotionele toestand van dat licht in plaats van zijn letterlijke uiterlijk.\n\nDit stuk behoort tot de meest recente aanwinsten in de Trouvé-collectie en is snel een favoriet van bezoekers geworden. De textuur beloont aandachtige inspectie — elke richel en vallei bevat microcomposities binnen het grotere geheel.",
    },
    {
      id: "TR-009",
      title: "INTERIEUR",
      type: "gevonden-voorwerp",
      status: "TENTOONGESTELD",
      metrics: "2021",
      image: "/images/work-09.jpg",
      artist: "Hassan El Ouarzazi",
      location: "Gent",
      medium: "Hout, glas en keramiek, 50 × 40 × 12 cm",
      article: "Interieur is een geneste installatie die de kijker meetrekt in opeenvolgende observatiekaders. Een natuurlijke grenenhouten doos huisvest een kleinere, donker omlijste glazen kast, die op zijn beurt een klein keramisch beeldje bevat — een traditionele pop met geschilderde gelaatstrekken en textielen kleding.\n\nDe gelaagdheid creëert een gevoel van beschermde kostbaarheid, alsof het object te betekenisvol is om rechtstreeks aan de wereld te worden blootgesteld. De warme nerf van het grenenhout en het reflecterende oppervlak van het glas creëren een dialoog tussen transparantie en omsluiting. Licht valt onder hoeken die het beeldje gedurende de dag verschillend belichten, waardoor de stille compositie tot leven komt.\n\nEl Ouarzazi vond het beeldje op een markt in de Hoge Atlas, waar het werd verkocht als kinderspeelgoed. Zijn herkadering verheft het bescheiden voorwerp tot kunsthistorische status en stelt vragen over waarde, context en de rol van het museum bij het wijden van het dagelijks leven.",
    },
    {
      id: "TR-010",
      title: "DE_SLEUTEL",
      type: "assemblage",
      status: "TENTOONGESTELD",
      metrics: "2023",
      image: "/images/work-10.jpg",
      artist: "Aisha Mahmoud",
      location: "Tanger",
      medium: "Gemengde media in antieke lijst, 35 × 30 cm",
      article: "De Sleutel is een klein werk met enorme aanwezigheid. Een sierlijke antieke verguldsel lijst — gered van een nalatenschap in Tanger — omsluit een donker, getextureerd interieur dat leest als een nachtelijke hemel of diep water. In het midden komt een gebeeldhouwde keramieken hand naar voren, die een sierlijke metalen sleutel vasthoudt tegen een fragment ruw hout.\n\nDe compositie is theatraal en symbolisch: de hand reikt vanuit de duisternis naar het licht, de sleutel belooft toegang tot iets ongeziens, de lijst dringt aan op het belang van wat het bevat. Mahmouds keuze voor een gevonden lijst — met zijn rococo-versierselen reeds verweerd door de tijd — creëert een spanning tussen decadentie en verval.\n\nDe kunstenaar heeft geweigerd uit te leggen wat de sleutel opent, met de stelling dat \"elke kijker al de deur kent die hij het meest wenst te ontgrendelen.\" Het werk is een raakpunt geworden voor bezoekers, van wie velen hun eigen handen fotograferen die naar de lijst reiken in imitatie.",
    },
    {
      id: "TR-011",
      title: "GLOED_EN_VIOLET",
      type: "olieverf-op-canvas",
      status: "TENTOONGESTELD",
      metrics: "2023",
      image: "/images/work-11.jpg",
      artist: "Zahra Tazi",
      location: "Gent",
      medium: "Olieverf op ruw linnen, 120 × 80 cm",
      article: "Gloed en Violet is een explosie van gebaar — zwiepende bogen van gebrand oranje en diep violet die elkaar over ruw linnen kruisen en verweven. Tazi werkt met haar hele lichaam, draait het canvas op de vloer om het van alle hoeken te benaderen, wat resulteert in een compositie die zwaartekrachtoriëntatie tart.\n\nDe ruwe canvas-ondergrond schemert plaatselijk door en wordt negatieve ruimte die ademt te midden van de chromatische intensiteit. Witte streken doorklieven het oppervlak als bliksem of bot, en introduceren een derde element dat bemiddelt tussen de warme en koele paletten. Het schilderij pulseert van beweging, zelfs in stilstand.\n\nTazi is een toonaangevende stem in het Marokkaanse abstract expressionisme. Ze beschrijft haar proces als \"een gesprek tussen impuls en weerstand,\" en dit werk vangt het moment waarop beide sprekers tegelijk praten — chaotisch, urgent en levend.",
    },
    {
      id: "TR-012",
      title: "EVENWICHT",
      type: "bronzen-sculptuur",
      status: "VERZAMELD",
      metrics: "2022",
      image: "/images/work-12.jpg",
      artist: "Mehdi El Fassi",
      location: "Casablanca",
      medium: "Brons en marmer, 25 × 35 × 25 cm",
      article: "Evenwicht destilleert sculpturale spanning tot zijn essentie: een enkele verweerde bronzen bol rustend op een plak ruw roze marmer. Het verdigris-oppervlak van de bol — het resultaat van opzettelijke oxidatie — contrasteert met de gladde warmte van het marmer en creëert een dialoog tussen industriële en organische materialen.\n\nDe compositie is een studie in evenwicht. De bol zit licht buiten het midden, met zijn gewicht zichtbaar samengedrukt in de steen. Schaduwen strekken zich dramatisch naar één kant uit, wat een lichtbron suggereert die zelf in beweging is. Het werk verandert van karakter gedurende de dag terwijl natuurlijk licht over zijn oppervlakken verschuift.\n\nEl Fassi, met een achtergrond in techniek, benadert sculptuur als een probleem van krachten. Evenwicht lost het probleem op met bedrieglijke eenvoud: de bol zou moeten rollen, maar doet het niet; de steen zou moeten barsten, maar houdt stand. De spanning tussen potentiële en daadwerkelijke beweging is het ware onderwerp van het werk.",
    },
    {
      id: "TR-013",
      title: "LAGEN_VAN_TIJD",
      type: "gemengde-media-collage",
      status: "TENTOONGESTELD",
      metrics: "2024",
      image: "/images/work-13.jpg",
      artist: "Yasmina Oufkir",
      location: "Gent",
      medium: "Gemengde media op canvas, 200 × 180 cm",
      article: "Lagen van Tijd is een monumentale collage die leest als een archeologische dwarsdoorsnede. Oufkir legt doorschijnende velvellen in oker, salie en houtskool over een geschilderde geometrische ondergrond, en scheurt en brandt vervolgens de randen om te onthullen wat eronder ligt. Elke laag vertegenwoordigt een ander tijdperk — recente geschiedenis bovenaan, diepe tijd onderaan.\n\nDe schaal is meeslepend. Voor het werk staand voelen kijkers hun eigen schaal verminderen, alsof ze geconfronteerd worden met een rotswand of een oude muur. De gescheurde randen creëren zachte grenzen tussen perioden, en weigeren de schone chronologie van een tijdlijn ten gunste van rommelige, overlappende temporaliteiten.\n\nOufkir besteedde twee jaar aan het verzamelen van materialen: handgemaakte papieren uit Fez, pigmenten gemalen uit lokale mineralen, vellum gerijpt in haar dakatelier. Het resultaat is een werk dat letterlijk Gent bevat — de aarde, het licht, de lagen Berberse, Arabische en koloniale geschiedenis.",
    },
    {
      id: "TR-014",
      title: "DRIE_GRATIËN",
      type: "keramiek-collectie",
      status: "TENTOONGESTELD",
      metrics: "2023",
      image: "/images/work-14.jpg",
      artist: "Imane Benjelloun",
      location: "Safi",
      medium: "Handgevormde klei, verschillende formaten",
      article: "Drie Gratiën presenteert een trio keramische vaten in matte terracotta, saliegroen en crèmewit. Benjelloun vormt elke pot met de hand zonder draaischijf, en omarmt asymmetrie en imperfectie als deugden in plaats van gebreken. De vormen verwijzen naar oude Marokkaanse opslagvaten terwijl ze onmiskenbaar hedendaags blijven.\n\nHet terracottastuk is ongeglazuurd, met een ruw en poreus oppervlak. Het groene vat draagt een dun celadon-glazuur dat zich verzamelt in vingerafdrukken en duimindrukken. De witte pot is bedekt met sliplaag, glad als eierschaal. Samen lezen ze als een gesprek tussen aarde, water en lucht — de drie elementen van keramiek.\n\nBenjelloun werkt in Safi, een stad met een acht eeuwen oude keramische traditie. Ze beschrijft haar praktijk als \"luisteren naar wat de klei wil worden.\" De Drie Gratiën tonen aan dat aandachtig luisteren objecten van diepe stilte en gratie kan voortbrengen.",
    },
    {
      id: "TR-015",
      title: "NOCTURNE",
      type: "encaustiek-op-paneel",
      status: "TENTOONGESTELD",
      metrics: "2022",
      image: "/images/work-15.jpg",
      artist: "Rachida El Khamssi",
      location: "Gent",
      medium: "Encaustische was op houten paneel, 80 × 60 cm",
      article: "Nocturne duikt in de duisternis en vindt licht. El Khamssi werkt in encaustiek — verwarmde bijenwas vermengd met pigment — en bouwt tientallen doorschijnende lagen op die ze vervolgens schraapt, smelt en herwerkt. Het resultaat is een oppervlak van buitengewone diepte, als kijken in een bevroren meer 's nachts.\n\nHet palet is beperkt tot diep indigo en metallic zilver, wat een maanverlicht landschap creëert dat bestaat tussen representatie en abstractie. Organische vormen komen tevoorschijn uit de duisternis — misschien takken, misschien golven, misschien slechts het eigen verlangen van de kijker om vorm te vinden in chaos. Het zilver vangt licht en lijkt van binnenuit te gloeien.\n\nEncaustiek is een van de oudste schildertechnieken, daterend uit het oude Egypte. El Khamssi's gebruik van het medium verbindt hedendaagse praktijk met diepe geschiedenis, en suggereert dat de drang om licht in duisternis vast te leggen tijdloos is.",
    },
    {
      id: "TR-016",
      title: "MARRAKECH_ZON",
      type: "gevonden-voorwerp",
      status: "NIEUW",
      metrics: "2024",
      image: "/images/work-16.jpg",
      artist: "Tariq Mouline",
      location: "Gent",
      medium: "Gemengde media op hout, 120 × 120 cm",
      article: "Gent Zon is een radiale assemblage die energie uitstraalt vanuit een centraal middelpunt. Mouline rangschikt geroeste metalen fragmenten, scherven van traditionele Marokkaanse zellige-tegels in turquoise en kobalt, en verweerd drijfhout op een houten plaat om een zonnestraalpatroon te vormen. In het midden suggereert een gecorrodeerd tandwiel zowel mechanische tijd als organische groei.\n\nDe gevonden materialen dragen hun eigen geschiedenis: het metaal van een gesloopt medina-gebouw, de tegel van een renovatieplek in de Kasbah, het hout van de Atlantische kust. Mouline's rangschikking transformeert deze weggegooide elementen tot een viering van Gent's gelaagde identiteit — Berbers, Arabisch, Frans koloniaal, hedendaags globaal.\n\nHet werk is kinetisch in opzet. De uitstralende spaken creëren visuele beweging die naar buiten draait vanuit het centrum, terwijl de kleurprogressie van warm hout naar koele tegel een temperatuurgradiënt suggereert. Het is een zon gemaakt van dingen die de zon al heeft verweerd.",
    },
  ],
}

export const instantConfig: InstantConfig = {
  textLines: [
    "TROUVÉ",
    "gevonden voor het vervaagt",
    "Elk werk heeft een verhaal. Elk verhaal verdient een getuige.",
  ],
  videoPath: "",
  roomLabel: "RUIMTE 03 // HET MOMENT",
}

export const footerConfig: FooterConfig = {
  brandText: "Trouvé",
  taglineLines: [
    "KUNST IS NIET WAT JE ZIET",
    "MAAR WAT JE ANDEREN LAAT ZIEN",
    "— EDGAR DEGAS",
  ],
  navigationHeading: "NAVIGATIE",
  navigationLinks: [
    { label: "De Drempel", href: "#hero" },
    { label: "Geselecteerde Werken", href: "#gallery" },
    { label: "Het Moment", href: "#instant" },
    { label: "Bezoek Ons", href: "#footer" },
  ],
  contactHeading: "CONTACT",
  contactLinks: [
    { label: "hallo@trouve.gallery", href: "mailto:hallo@trouve.gallery" },
    { label: "Instagram", href: "#" },
    { label: "Rue Mouassine, Gent", href: "#" },
  ],
  copyright: "© 2026 TROUVÉ GALERIE",
  creditText: "MET ZORG SAMENGESTELD",
}

export const workDetailConfig: WorkDetailConfig = {
  backLabel: "← TERUG",
  artistLabel: "Kunstenaar",
  locationLabel: "Locatie",
  mediumLabel: "Medium",
  backToGalleryLabel: "← Terug naar galerie",
  metaRoomSuffix: "RUIMTE 02",
  footerNote: "Trouvé · Ruimte 02",
  notFoundTitle: "404 · Werk niet gevonden",
  notFoundLink: "← TERUG NAAR GALERIE",
}

// Helper map for WorkDetail lookups
export const worksById: Record<string, WorkItem> = Object.fromEntries(
  galleryConfig.works.map((w) => [w.id.toLowerCase(), w]),
)
