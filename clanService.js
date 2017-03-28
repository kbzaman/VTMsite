var app = angular.module("site");

app.factory('DescriptionsFactory', function(){

  return {
    'Ahrimanes': 'The Ahrimanes are a rare, all-female bloodline of <termindex term="Kindred">Kindred</termindex> that originally existed during the Dark Ages, headed by a woman called Ádísa. Sometime during the long night, Ádísa and her bloodline were lost and subsumed into Clan Gangrel. Centuries later, the bloodline was unknowingly resurrected by a woman called Muricia. Since then, the Ahrimanes roam the night again, albeit under a different guise and leader.',
    'Anda': 'The Anda were a bloodline of the Gangrel who existed among the Mongols during the Dark Ages. The bloodline\'s progenitor was Dobrul the Brave. he Anda lived openly among their extended families who often acted as their herd. In return for their blood and protection during the day, the Anda would protect the family from harm and use his supernatural powers to the welfare of the family.'
  }

  // return [
  //   {
  //     name: 'Ahrimanes',
  //     description: 'The Ahrimanes are a rare, all-female bloodline of <termindex term="Kindred">Kindred</termindex> that originally existed during the Dark Ages, headed by a woman called Ádísa. Sometime during the long night, Ádísa and her bloodline were lost and subsumed into Clan Gangrel. Centuries later, the bloodline was unknowingly resurrected by a woman called Muricia. Since then, the Ahrimanes roam the night again, albeit under a different guise and leader.'
  //   },
  //   {
  //     name: 'Anda',
  //     description: 'The Anda were a bloodline of the Gangrel who existed among the Mongols during the Dark Ages. The bloodline\'s progenitor was Dobrul the Brave. he Anda lived openly among their extended families who often acted as their herd. In return for their blood and protection during the day, the Anda would protect the family from harm and use his supernatural powers to the welfare of the family.',
  //   },
  //   {
  //     name: 'Assamite',
  //     description: 'The Assamite clan is based in a hidden fortress named Alamut in the Middle East. They are traditionally seen by Western Kindred as dangerous assassins and diablerists, but in truth they are guardians, warriors and scholars who seek to distance themselves from the Jyhad. Throughout their history, they have remained a self-sufficient and independent clan.',
  //   },
  //   {
  //     name: 'Baali',
  //     description: 'The Baali are a bloodline of vampires associated with demon worship. Because of their affinity with the unholy, the Baali are particularly vulnerable to holy iconography, holy ground and holy water. Some versions present the true purpose of the Baali as keeping demons sleeping by feeding them with carnage and destruction. But most presentations show them as infernalists, using demon worship to gain additional power.'
  //   },
  //   {
  //     name: 'Blood Brothers',
  //     description: 'The Blood Brothers are a rare bloodline of the Sabbat, created by Tremere antitribu and Tzimisce kolduns. Designed to function as perfect combat units, Blood Brothers possess a sort of shared consciousness, working exclusively with the \"circle\" of Blood Brothers with whom they share their "hive mind". The members of a circle will often be fleshcrafted by Tzimisce to appear identical, an outward reflection of their lack of individuality.'
  //   },
  //   {
  //     name: 'Brujah',
  //     description: 'The Brujah are a major clan in Vampire: The Masquerade. Quick to anger and always passionate in the Modern Nights, they have been regaining their position as a clan of lofty philosophers and activists, and are often pointed to as a clan of unruly rebels and roughnecks that should not be messed with.',
  //   },
  //   {
  //     name: 'Caitiff',
  //     description: 'Caitiff are vampires with no known clan. It can mean that they were abandoned and therefore do not know their lineage, or that they have no traits of the clan that they were embraced into. Caitiff have no inherent clan disciplines, but they also do not have any clan weakness. They are typically looked down upon by every other type of vampire, whether it\'s with distaste or pity.'
  //   },
  //   {
  //     name: 'Cappadocian',
  //     description: 'The Cappadocians, also known as the "Clan of Death". Detached scholars obsessed with the mysteries of death, they are now (theoretically) extinct, having been eliminated through a coup de famille by Augustus Giovanni. Unfortunately for the Giovanni, they may have underestimated what it takes to kill a clan of experts on death. It is said that Cappadocius himself developed their unique discipline, Mortis, which is now known as Necromancy.'
  //   },
  //   {
  //     name: 'Children of Osiris',
  //     description: 'The Children of Osiris are a bloodline of vampires who flourished around the second or third millennium BC. The group was founded by Osiris, the \"Resurrected King\". They are known to practice a Discipline unlike any other, called Bardo, which allows a vampire to have control over the Beast within. All their members come from other clans, or are Caitiff. Joining their ranks also requires high levels of Humanity.'
  //   },
  //   {
  //     name: 'Daughters of Cacophony',
  //     description: 'The Daughters of Cacophony are a bloodline of unknown origin (although the most common guesses are Toreador or Malkavian) to the general vampire population. Currently composed entirely of women, the Daughters practice a unique discipline called Melpominee. This power allows the Daughters to invoke strange effects through singing, and are the choralistes par excellence of the undead, hence their nickname, the "Sirens".'
  //   },
  //   {
  //     name: 'Followers of Set',
  //     description: 'The Followers of Set (or Setites) are a clan of vampires who believe their founder was the Egyptian god Set. Orthodox Setite belief dictates that Set will one day return to rule or consume the world, and devout Setites prepare the way for his resurrection. To this end, the clan remains independent of the Sects of other Kindred, and practice with great skill the arts of corruption, deceit and ancient sorcery.'
  //   },
  //   {
  //     name: 'Gangrel',
  //     description: 'The Gangrel are one of the thirteen vampire clans found in the Classic World of Darkness, characterized by animalistic features and nature. Nomads who hold closer ties to the wild places than most of their city-bound cousins, they are also closer to the animal aspect of the Beast, and are masters of the Protean Discipline.'
  //   },
  //   {
  //     name: 'Gargoyles',
  //     description: 'The Gargoyles are winged, stony vampires originally created using the blood of three different clans: Gangrel, Nosferatu, and Tzimisce. Created (and enslaved) by the Tremere, they evolved into a full-fledged bloodline and became somewhat independent of the Tremere and their blood magic. They employ their own unique discipline called Visceratika, a power that expresses their natural affinity for stone, earth, and things made thereof.'
  //   },
  //   {
  //     name: 'Giovanni',
  //     description: 'The Giovanni are the usurpers of clan Cappadocian, and is both a clan and a family. They Embrace exclusively within their family and are heavily focused on the goals of money and necromantic power. They control wraiths and access the Shadowlands through their unique Necromancy discipline.'
  //   },
  //   {
  //     name: 'Harbingers of Skulls',
  //     description: 'The Harbingers of Skulls are a rare bloodline who surfaced in the Final Nights. While few Kindred suspect the truth, they are the last remnants of the Cappadocian clan. Usually found among the Sabbat, they seek allies in their vendetta against the Giovanni and others who betrayed them.'
  //   },
  //   {
  //     name: 'Kiasyd',
  //     description: 'The Kiasyd are a bloodline of the Lasombra founded after a mysterious "accident" involving the Lasombra Marconius of Strasbourg, faeries, and the blood of "Zeernebooch, a god of the underworld". It resulted in The Kiasyd\'s strange alien features and their mystical ties to changelings.  They practice the unique discipline Mytherceria, which gives them mystical senses, the ability to steal knowledge, and other powers attributed to fae.'
  //   },
  //   {
  //     name: 'Lamia',
  //     description: 'Lamia was a bloodline of the Cappadocian clan, founded after Lamia (a rumored descendant and high priestess of Lilith). Members of this bloodline served the Cappadocians as dervishes and warriors until the purge orchestrated by the Giovanni, in 1444. They also practice their own path of Necromancy called "Path of the Four Humors".'
  //   },
  //   {
  //     name: 'Lasombra',
  //     description: 'Leaders of the Sabbat, clan Lasombra are social Darwinists, predators, elegant and inhuman. Due to their inherent clan weakness, Lasombra vampires cast no reflections. They control the shadows using their unearthly trademark discipline, Obtenebration. Because of their ties to the shadows, they also are more sensitive to light than other Kindred.'
  //   },
  //   {
  //     name: 'Lhiannan',
  //     description: 'The Lhiannan were a territorial, matriarchal and druidic Cainite bloodline who existed in the Dark Ages. They are an offshoot of Clan Gangrel, although they themselves did not believe they were descended from Caine at all, instead believing they were made by "The Crone". The Lhiannan have a unique connection to the world of spirits, most notably in the form of their Discipline Ogham, a form of blood magic based on Celtic runes.'
  //   },
  //   {
  //     name: 'Malkavian',
  //     description: 'The Malkavians are a clan of Kindred cursed with insanity, every Malkavian is in some fashion insane. They are one of the original seven clans of the Camarilla and a pillar of the organization. Throughout history, the Malkavians have been the seers and oracles of the Kindred, bound by strange compulsions and insight. The Malkavian\'s clan discipline, Dementation, is a power that reflects their own madness.'
  //   },
  //   {
  //     name: 'Nagaraja',
  //     description: 'The Nagaraja are a bloodline of flesh-eating vampires with a magical heritage. They descend from mages of the Idran faction, part of the Chakravanti Tradition, who sought to create their own brood of vampires by experimenting with vampire blood. The Idran\'s manipulation of vampire blood, combined with their innate magical natures, produced the Nagaraja bloodline, feared necromancers, servants of the Black Hand.'
  //   },
  //   {
  //     name: 'Nosferatu',
  //     description: 'The most visibly cursed of all Kindred, the Embrace warps each Nosferatu into a hideously deformed creature; the archetypal Nosferatu resembles Max Shreck\'s Count Orlok, though the curse has any number of variations. The Nosferatu are the spymasters of the dead, collecting information and selling it for a dear price. They are also the masters of the underground, living in the sewers for protection.'
  //   },
  //   {
  //     name: 'Noiad',
  //     description: 'The Noiad are a Gangrel bloodline that dwelled in Finland in the Dark Ages. They are depicted as an alien bloodline that may represent the first Cainite presence on the continent of Europe. As they were extremely dependent on their mortal herds, the Noiads viciously denied any changes in their society, driving them further and further northward to escape the Viking cultures in Scandinavia.'
  //   },
  //   {
  //     name: 'Ravnos',
  //     description: 'Known for being wandering vagabonds and hucksters, the Ravnos are charlatans who gleefully practice their arts of deception and theft. They all have a vice they must compulsively indulge in, which has earned them their seedy reputation. Their signature discipline, Chimerstry, allows the Ravnos to conjure and control illusions.'
  //   },
  //   {
  //     name: 'Salubri',
  //     description: 'The Salubri are a clan of healers and peacemakers, and bear a distinct third eye on their foreheads. After the diablerie of the clan Founder, Saulot by the treacherous Tremere, they were hunted down by the Warlocks. They employ two unique disciplines Obeah and Valeren, for the healer and warrior castes, respectfully.'
  //   },
  //   {
  //     name: 'Samedi',
  //     description: 'The Samedi bloodline has a relatively short but immensely curious history within kindred society. Originating most likely in the Caribbean, the bloodline\'s members all seem to resemble a zombie or a corpse. Unlike the Nosferatu, who merely become disfigured, the body of the Samedi appears to be in a constant state of decay.'
  //   },
  //   {
  //     name: 'Toreador',
  //     description: 'The Toreador are a clan of vampires known for being some of the most beautiful, sensual, seductive, emotional and glamorous of the Kindred. They are responsible for the legends of vampires who seduce and entice their prey with beauty, love and sensuality. Due to their inherent clan weakness, although lovely and seductive, the members of this clan are as much prisoners of their artistic vision and sensitivity as they are its beneficiaries.'
  //   },
  //   {
  //     name: 'Tremere',
  //     description: 'The Tremere are one of the main bastions of the Camarilla, and have their own strict structure and order hierarchy within their own clan as well. Practitioners of blood magic known as Thaumaturgy, they have the most magical heritage, as they became Kindred through a magical ritual.'
  //   },
  //   {
  //     name: 'True Brujah',
  //     description: 'The True Brujah are a bloodline that are the descendants of the original Antediluvian founder of Clan Brujah and not his diablerist/childe Troile, hence their name. They are noted for their cool, detached behavior, contrary to the main lineage who are known for their short, violent tempers and rebellious attitudes. They control a unique discipline known as Temporis, which gives them the ability to manipulate time itself.'
  //   },
  //   {
  //     name: 'Tzimisce',
  //     description: 'The Tzimisce are a clan of scholars and flesh-shapers. The Tzimisce have left the human condition behind gladly, and now focus on transcending the vampiric limitations. Polite, intelligent and inquisitive they seem a stark contrast to the howling Sabbat mobs, however on closer inspection it\'s clear this is a mask hiding something alien and monstrous. Their trademark discipline Vicissitude gives them access to the art of flesh & bone crafting.'
  //   },
  //   {
  //     name: 'Ventrue',
  //     description: 'The Ventrue has long been one of the proudest lines of vampires. Its members work hard to maintain a reputation for honor, genteel behavior, and leadership. A sense of noblesse oblige has long pervaded the clan, accompanied by the genuine belief that the Ventrue know what\'s best for everyone. They consider themselves the oldest clan, and see themselves as the enforcers of tradition and the rightful leaders of Kindred society.'
  //   }
  // ]
});