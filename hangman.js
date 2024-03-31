const categories = {
    "Colors 🎨": ['fuchsia', 'salmon', 'firebrick', 'coral', 'moccasin', 'lavender', 'olive', 'teal', 'peachpuff', 'cornsilk', 'turquoise', 'sienna', 'cadetblue', 'chocolate', 'seashell', 'honeydew', 'ivory', 'papayawhip', 'thistle', 'amber', 'rosybrown', 'beige', 'burlywood', 'gold', 'cyan', 'plum', 'snow', 'wheat', 'tomato'],
    "Shapes ⬜️": ['rhombus', 'cube', 'pentagon', 'cone', 'trapezoid', 'oval', 'ellipse', 'square', 'triangle', 'parallelogram', 'cylinder', 'hexagon', 'rectangle', 'circle', 'triangular prism', 'octahedron', 'heptagon', 'octagon', 'quadrilateral', 'trapezium', 'polygon', 'sphere', 'cuboid', 'pyramid', 'ellipsoid', 'nonagon', 'tetrahedron', 'kite', 'decagon'],
    "Movies 🎥": ['the vow', 'princess diaries', 'jumanji', 'the notebook', 'freaky friday', 'frozen', 'brave', 'tangled', 'notting hill', 'love actually', 'amelie', 'pretty woman', 'titanic', 'the proposal', 'the terminal', 'sully', 'home alone', 'blended', 'despicable me', 'inception', 'ratatouille', 'ghostbusters', 'up', 'finding neverland', 'fantastic four', 'coco', 'onward', 'interstellar', 'gravity'],
    "Superheroes 🦸": ['thor', 'wonder woman', 'superman', 'rogue', 'black panther', 'storm', 'hawkeye', 'captain america', 'ironman', 'black widow', 'starlord', 'scarlet witch', 'green lantern', 'batman', 'spiderman', 'antman', 'cyclops', 'flash', 'quicksilver', 'captain marvel', 'wolverine', 'aquaman', 'human torch', 'invisible woman', 'hulk', 'falcon', 'the thing', 'hawkgirl', 'deadpool'],
    "Countries 🏳️": ['spain', 'india', 'morocco', 'france', 'netherlands', 'russia', 'ireland', 'germany', 'italy', 'austria', 'czech republic', 'ghana', 'maldives', 'croatia', 'malaysia', 'fiji', 'denmark', 'jamaica', 'norway', 'canada', 'sweden', 'mexico', 'chile', 'brazil', 'iceland', 'new zealand', 'argentina', 'japan', 'portugal'],
    "Naruto 🌀": ['naruto uzumaki', 'rasenshuriken', 'susanoo', 'kotoamatsukami', 'sasuke uchiha', 'mangekyou sharingan', 'madara uchiha', 'chidori', 'konohagakure', 'kakashi hatake', 'genjutsu', 'jiraiya', 'itachi uchiha', 'orochimaru', 'hashirama senju', 'hokage', 'shikamaru nara', 'jinchuriki', 'zabuza momochi', 'yellow flash', 'sakura haruno', 'hinata hyuga', 'deidara', 'akatsuki', 'asakujaku', 'kazekage', 'gamabunta', 'flying raijin', 'kekkei genkai'],
    "Flowers 🌼": ['orchid', 'lily', 'rose', 'lotus', 'jasmine', 'daffodil', 'daisy', 'hibiscus', 'gerbera', 'sunflower', 'tulip', 'peony', 'dahlia', 'marigold', 'petunia', 'lavender', 'periwinkle', 'cherry blossom', 'bluebell', 'dandelion', 'chrysanthemum', 'hyacinth', 'snowdrop', 'iris', 'geranium', 'honeysuckle', 'hazel', 'mistletoe', 'nightshade'],
    "Disney 🧜‍♀️": ['eugene', 'rapunzel', 'nemo', 'aladdin', 'jasmine', 'ariel', 'elsa', 'dory', 'simba', 'aurora', 'olaf', 'anna', 'belle', 'astrid', 'hiccup', 'merida', 'dumbo', 'linguini', 'maui', 'toothless', 'eva', 'mowgli', 'woody', 'alice', 'moana', 'kristoff', 'mater', 'buzz lightyear', 'miguel'],
    "HarryPotter 🧙": ['leaky cauldron', 'quidditch', 'marauders map', 'harry potter', 'transfiguration', 'boggart', 'remembrall', 'hermione granger', 'herbology', 'muggle', 'galleon', 'alohomora', 'animagus', 'ron weasley', 'riddikulus', 'yule ball', 'apparition', 'albus dumbledore', 'the burrow', 'diagon alley', 'severus snape', 'divination', 'expecto patronum', 'floo network', 'gillyweed', 'gryffindor', 'ravenclaw', 'incendio', 'pensieve'],
    "Music 🎸": ['acoustic', 'ballad', 'chord', 'chorus', 'edm', 'grunge', 'heavy metal', 'jazz', 'mixtape', 'punk rock', 'reggae', 'remix', 'rhythm', 'tambourine', 'turntable', 'verse', 'yodel', 'saxophone', 'cello', 'synthesizer', 'composition', 'pitch', 'opera', 'concert', 'symphony', 'harmonica', 'trumpet', 'violin', 'tempo'],
    "Fantasy 🦄": ['unicorn', 'lochness', 'apprentice', 'alchemy', 'chalice', 'conjure', 'gnome', 'pixie', 'soothsayer', 'dungeon', 'leprechaun', 'bewitch', 'realm', 'satyr', 'golem', 'griffin', 'nymph', 'dragon', 'crystal ball', 'enchantment', 'hobbit', 'mermaid', 'sorcerer', 'centaur', 'fairy', 'warlock', 'wyvern', 'phoenix', 'sphinx']
};

const clues = {
    "fuchsia": "Great Barrier Reef is famous for this",
    "salmon": "Type of footwear",
    "firebrick": "Flower used for aromatherapy",
    "coral": "Mediterranean fruit",
    "moccasin": "Named after Peach",
    "lavender": "Has corn in its name",
    "olive": "Bluish-green phosphate mineral",
    "teal": "Shade of cyan",
    "peachpuff": "Made from cocoa",
    "cornsilk": "Found washed up on beaches",
    "turquoise": "Named after a fruit of the melon family",
    "sienna": "Elephant's tusk",
    "cadetblue": "Named after papaya",
    "chocolate": "National flower of Scotland",
    "seashell": "Glistening gem",
    "honeydew": "Light shade of red with brown in its name",
    "ivory": "Color of natural wool",
    "papayawhip": "Derives its name from wood",
    "thistle": "Precious metal",
    "amber": "Member of CMYK quartet",
    "rosybrown": "Popular form of cake",
    "beige": "Ice crystals",
    "burlywood": "Most widely used grain",
    "gold": "La Tomatina festival",
    "cyan": "Mother and daughter switching souls",
    "plum": "Blended familymoon",
    "snow": "Gru and his Minions",
    "wheat": "The fastest man alive who fights against evil with his super speed",
    "tomato": "With the ability to run at the speed of sound, he is always racing to uncover his past and the road to the future",
    "rhombus": "Four equal sides",
    "cube": "Eight year old Kevin saving his house from burglars",
    "pentagon": "Polyhedron with eight faces",
    "cone": "Pyramid shape with four sides",
    "trapezoid": "Flying object",
    "oval": "A mutant with healing power, adamantium metal claws and a no-nonsense attitude",
    "ellipse": "An astronaut, who gained his powers on a spacecraft bombarded by cosmic rays",
    "square": "Uses her power of invisibility and mental ability to manipulate ambient cosmic energy to save Earth",
    "triangle": "Bruce Banner's alter ego, who is always angry",
    "parallelogram": "Former US Air Force pararescue airman, he teams up with Cap to foil HYDRA's plans",
    "cylinder": "Orange-colored, thick-skinned, heavily muscled, and superhumanly strong thing",
    "hexagon": "Former pilot, who upon being exposed to energy of the Tesseract, obtained cosmic powers",
    "rectangle": "God of Thunder",
    "circle": "Amazonian warrior queen",
    "triangular prism": "Man of Steel",
    "octahedron": "Possesses psionic abilities to manipulate the weather",
    "heptagon": "Wakandan king",
    "octagon": "Super spy who has become one of S.H.I.E.L.D.'s most deadly assassins",
    "quadrilateral": "Powerful mutant sorceress, has been a part of both Avengers and X-Men",
    "trapezium": "Part of an alien interstellar police force who fights evil with the aid of his ring",
    "polygon": "The Dark Knight",
    "sphere": "The friendly neighborhood superhero",
    "cuboid": "Astronauts gaining superpowers after being hit by cosmic radiation",
    "pyramid": "The first of the X-Men who can unleash an uncontrollable blast of optic force",
    "ellipsoid": "Genius. Billionaire. Playboy. Philanthropist.",
    "nonagon": "With the ability to run at the speed of sound, he is always racing to uncover his past and the road to the future",
    "tetrahedron": "Former pilot, who upon being exposed to energy of the Tesseract, obtained cosmic powers",
    "kite": "A mutant, she absorbs the power of anyone she touches",
    "decagon": "King of the Seven Seas",
    "the vow": "Wedding promise",
    "princess diaries": "Scottish tale of an archer princess",
    "jumanji": "Girl with the 70-foot long golden locks",
    "the notebook": "British bookseller meets American actress",
    "freaky friday": "Christmas-themed romantic comedy",
    "frozen": "Young French waitress caught in an imaginative world",
    "brave": "Romantic comedy with Julia Roberts as lead",
    "tangled": "The ship that could not sink",
    "notting hill": "Andrew and Margaret's trip to Sitka",
    "love actually": "Victor Navorski stranded at the airport",
    "amelie": "Miracle on the Hudson",
    "pretty woman": "Eight-year-old Kevin saving his house from burglars",
    "titanic": "Blended familymoon",
    "the proposal": "Gru and his Minions",
    "the terminal": "The fastest man alive who fights against evil with his super speed",
    "sully": "With the ability to run at the speed of sound, he is always racing to uncover his past and the road to the future",
    "home alone": "Former pilot, who upon being exposed to energy of the Tesseract, obtained cosmic powers",
    "blended": "A mutant with healing power, adamantium metal claws and a no-nonsense attitude",
    "despicable me": "King of the Seven Seas",
    "inception": "An astronaut, who gained his powers on a spacecraft bombarded by cosmic rays",
    "ratatouille": "Uses her power of invisibility and mental ability to manipulate ambient cosmic energy to save Earth",
    "ghostbusters": "Bruce Banner's alter ego, who is always angry",
    "up": "A former US Air Force pararescue airman, he teams up with Cap to foil HYDRA's plans",
    "finding neverland": "Orange-colored, thick-skinned, heavily muscled, and superhumanly strong thing",
    "fantastic four": "Former pilot, who upon being exposed to energy of the Tesseract, obtained cosmic powers",
    "coco": "God of Thunder",
    "onward": "Amazonian warrior queen",
    "interstellar": "Man of Steel",
    "gravity": "Possesses psionic abilities to manipulate the weather",
    "thor": "God of Thunder",
    "wonder woman": "Amazonian warrior queen",
    "superman": "Man of Steel",
    "rogue": "A mutant, she absorbs the power of anyone she touches",
    "black panther": "Wakandan king",
    "storm": "Possesses psionic abilities to manipulate the weather",
    "hawkeye": "Super spy who has become one of S.H.I.E.L.D.'s most deadly assassins",
    "captain america": "Former US Air Force pararescue airman, he teams up with Cap to foil HYDRA's plans",
    "ironman": "Genius. Billionaire. Playboy. Philanthropist.",
    "black widow": "Powerful mutant sorceress, has been a part of both Avengers and X-Men",
    "starlord": "Part of an alien interstellar police force who fights evil with the aid of his ring",
    "scarlet witch": "Mutant sorceress, has been a part of both Avengers and X-Men",
    "green lantern": "Part of an alien interstellar police force who fights evil with the aid of his ring",
    "batman": "The Dark Knight",
    "spiderman": "The friendly neighborhood superhero",
    "antman": "Astronauts gaining superpowers after being hit by cosmic radiation",
    "cyclops": "The first of the X-Men who can unleash an uncontrollable blast of optic force",
    "flash": "Former pilot, who upon being exposed to energy of the Tesseract, obtained cosmic powers",
    "quicksilver": "With the ability to run at the speed of sound, he is always racing to uncover his past and the road to the future",
    "captain marvel": "Former US Air Force pararescue airman, he teams up with Cap to foil HYDRA's plans",
    "wolverine": "A mutant with healing power, adamantium metal claws and a no-nonsense attitude",
    "aquaman": "King of the Seven Seas",
    "human torch": "Orange-colored, thick-skinned, heavily muscled, and superhumanly strong thing",
    "invisible woman": "Uses her power of invisibility and mental ability to manipulate ambient cosmic energy to save Earth",
    "hulk": "Bruce Banner's alter ego, who is always angry",
    "falcon": "Former pilot, who upon being exposed to energy of the Tesseract, obtained cosmic powers",
    "the thing": "Orange-colored, thick-skinned, heavily muscled, and superhumanly strong thing",
    "hawkgirl": "Amazonian warrior queen",
    "deadpool": "The friendly neighborhood superhero",
    "spain": "Madrid is the capital of this country",
    "india": "Taj Mahal is in this country",
    "morocco": "Casablanca is a city in this country",
    "france": "Eiffel Tower is in this country",
    "netherlands": "Amsterdam is the capital of this country",
    "russia": "Moscow is the capital of this country",
    "ireland": "Dublin is the capital of this country",
    "germany": "Berlin is the capital of this country",
    "italy": "Rome is the capital of this country",
    "austria": "Vienna is the capital of this country",
    "czech republic": "Prague is the capital of this country",
    "ghana": "Accra is the capital of this country",
    "maldives": "Malé is the capital of this country",
    "croatia": "Zagreb is the capital of this country",
    "malaysia": "Kuala Lumpur is the capital of this country",
    "fiji": "Suva is the capital of this country",
    "denmark": "Copenhagen is the capital of this country",
    "jamaica": "Kingston is the capital of this country",
    "norway": "Oslo is the capital of this country",
    "canada": "Ottawa is the capital of this country",
    "sweden": "Stockholm is the capital of this country",
    "mexico": "Mexico City is the capital of this country",
    "chile": "Santiago is the capital of this country",
    "brazil": "Brasília is the capital of this country",
    "iceland": "Reykjavik is the capital of this country",
    "new zealand": "Wellington is the capital of this country",
    "argentina": "Buenos Aires is the capital of this country",
    "japan": "Tokyo is the capital of this country",
    "portugal": "Lisbon is the capital of this country",
    "naruto uzumaki": "Ninja village known for its strong military",
    "rasenshuriken": "Ninja with a beast inside him",
    "susanoo": "A floating ninja paradise",
    "kotoamatsukami": "Ninja who aims to be the Hokage",
    "sasuke uchiha": "The number one unpredictable ninja",
    "mangekyou sharingan": "Ninja who doesn't believe in fate",
    "madara uchiha": "Ninja with a nine-tailed demon fox inside him",
    "chidori": "Ninja who loves ramen",
    "konohagakure": "Ninja with the dream to be the greatest Hokage",
    "kakashi hatake": "Ninja who seeks vengeance for his clan",
    "genjutsu": "Ninja who became the Hokage by sacrificing his life",
    "jiraiya": "Ninja who can create things out of thin air",
    "itachi uchiha": "Ninja who fights for his friends",
    "orochimaru": "Ninja who can control sand",
    "hashirama senju": "Ninja who can manipulate shadows",
    "hokage": "Ninja who wears an orange jumpsuit",
    "shikamaru nara": "Ninja who has the power of the Sharingan",
    "jinchuriki": "Ninja who can transform into a giant toad",
    "zabuza momochi": "Ninja who can create tsunamis",
    "yellow flash": "Ninja who can control foxes",
    "sakura haruno": "Ninja who can summon snakes",
    "hinata hyuga": "Ninja who controls insects",
    "deidara": "Ninja who has a puppet",
    "akatsuki": "Ninja who can control a clay bird",
    "asakujaku": "Ninja who can create explosions with his hands",
    "kazekage": "Ninja who can control sand",
    "gamabunta": "Ninja who can summon giant frogs",
    "flying raijin": "Ninja who can travel through time",
    "kekkei genkai": "Ninja who can control ice",
    "orchid": "Flower named after a part of the body",
    "lily": "Flower associated with a saint",
    "rose": "Shade of red with a cardinal in its name",
    "lotus": "Plant named after a day of the week",
    "jasmine": "Has a plane named after it",
    "daffodil": "A fragrant night-blooming flower",
    "daisy": "Plant known for its calming properties",
    "hibiscus": "Named after a gemstone",
    "gerbera": "A herbivore animal",
    "sunflower": "Symbol of peace",
    "tulip": "Named after a type of bird",
    "peony": "A color between blue and green",
    "dahlia": "Has a sea named after it",
    "marigold": "A type of car",
    "petunia": "Named after a mythical creature",
    "lavender": "Has corn in its name",
    "periwinkle": "A flower associated with love",
    "cherry blossom": "National flower of Japan",
    "bluebell": "Plant associated with Christmas",
    "dandelion": "Named after a type of tree",
    "chrysanthemum": "A tree associated with wisdom",
    "hyacinth": "Has a bird named after it",
    "snowdrop": "Plant known for its purifying properties",
    "iris": "Associated with Valentine's Day",
    "geranium": "Named after a type of dog",
    "honeysuckle": "A type of jewelry",
    "hazel": "Associated with Halloween",
    "mistletoe": "A type of plant",
    "nightshade": "A shade of blue",
    "eugene": "Ninja who loves ramen",
    "rapunzel": "Ninja who seeks vengeance for his clan",
    "nemo": "Ninja who doesn't believe in fate",
    "aladdin": "Ninja who fights for his friends",
    "jasmine": "Ninja who can manipulate shadows",
    "ariel": "Ninja who wears an orange jumpsuit",
    "elsa": "Ninja who has the power of the Sharingan",
    "dory": "Ninja who can control a clay bird",
    "simba": "Ninja who can control sand",
    "aurora": "Ninja who can summon snakes",
    "olaf": "Ninja who controls insects",
    "anna": "Ninja who can create explosions with his hands",
    "belle": "Ninja who can travel through time",
    "astrid": "Ninja who can control ice",
    "hiccup": "Ninja who can summon giant frogs",
    "merida": "Ninja who can control foxes",
    "dumbo": "Ninja who can transform into a giant toad",
    "linguini": "Ninja who can create tsunamis",
    "maui": "Ninja who can control sand",
    "toothless": "Ninja who can create things out of thin air",
    "eva": "Ninja who can control a giant robot",
    "mowgli": "Ninja who can transform into a bear",
    "woody": "Ninja who can control a cowboy doll",
    "alice": "Ninja who can control a dragon",
    "moana": "Ninja who can control water",
    "kristoff": "Ninja who can control ice",
    "mater": "Ninja who can control cars",
    "buzz lightyear": "Ninja who can control space",
    "miguel": "Ninja who can control music",
    "leaky cauldron": "Witchcraft and Wizardry Pub",
    "quidditch": "Magical sport played on broomsticks",
    "marauders map": "Magical map of Hogwarts",
    "harry potter": "Boy who lived",
    "transfiguration": "Magical ability to change form or appearance",
    "boggart": "Shape-shifting creature that takes on the form of your worst fear",
    "remembrall": "Magical object that helps you remember things",
    "hermione granger": "Smartest witch of her age",
    "herbology": "Study of magical plants",
    "muggle": "Non-magical person",
    "galleon": "Wizarding currency",
    "alohomora": "Unlocking charm",
    "animagus": "Witch or wizard who can transform into an animal",
    "ron weasley": "Best friend of Harry Potter",
    "riddikulus": "Spell used to repel a boggart",
    "yule ball": "Magical event held at Christmas",
    "apparition": "Magical form of teleportation",
    "albus dumbledore": "Headmaster of Hogwarts",
    "the burrow": "Home of the Weasley family",
    "diagon alley": "Wizarding shopping street",
    "severus snape": "Potions master at Hogwarts",
    "divination": "Magical art of predicting the future",
    "expecto patronum": "Spell to conjure a protective guardian",
    "floo network": "Magical transportation through fireplaces",
    "gillyweed": "Magical plant that allows breathing underwater",
    "gryffindor": "One of the four Hogwarts houses",
    "ravenclaw": "One of the four Hogwarts houses",
    "incendio": "Fire-starting spell",
    "pensieve": "Magical object used to view memories",
    "acoustic": "Music played without electric instruments",
    "ballad": "Slow, emotional song",
    "chord": "Group of notes played together",
    "chorus": "Repeating section of a song",
    "edm": "Electronic Dance Music",
    "grunge": "Alternative rock genre from the 1990s",
    "heavy metal": "Loud and aggressive rock music genre",
    "jazz": "American music genre with improvisation",
    "mixtape": "Compilation of songs",
    "punk rock": "Rebellious rock music genre",
    "reggae": "Jamaican music genre",
    "remix": "Alternate version of a song",
    "rhythm": "Pattern of beats in music",
    "tambourine": "Shaking instrument with small metal disks",
    "turntable": "Device for playing vinyl records",
    "verse": "Section of a song with lyrics",
    "yodel": "Singing technique involving rapid changes in pitch",
    "saxophone": "Brass instrument with a single reed mouthpiece",
    "cello": "String instrument played with a bow",
    "synthesizer": "Electronic music instrument",
    "composition": "Creating music",
    "pitch": "How high or low a note is",
    "opera": "Dramatic music genre with singing",
    "concert": "Live music performance",
    "symphony": "Large orchestral work",
    "harmonica": "Small wind instrument played by mouth",
    "trumpet": "Brass instrument with a flared bell",
    "violin": "String instrument played with a bow",
    "tempo": "Speed of music",
    "unicorn": "Legendary horse with a single horn",
    "lochness": "Famous Scottish lake monster",
    "apprentice": "Student learning a trade",
    "alchemy": "Medieval science of turning metals into gold",
    "beowulf": "Heroic epic poem",
    "goblin": "Small, mischievous creature",
    "shapeshifter": "Being able to change form",
    "talisman": "Object believed to have magical powers",
    "potion": "Liquid with magical properties",
    "wizard": "Magic practitioner",
    "sorcerer": "Wizard with innate magical abilities",
    "enchantress": "Female sorcerer",
    "centaur": "Half-human, half-horse creature",
    "fairy": "Mythical being with magical powers",
    "giant": "Enormous humanoid creature",
    "hobbit": "Small, human-like creature from Middle-earth",
    "ogre": "Large, brutish humanoid creature",
    "phoenix": "Mythical bird that rises from its own ashes",
    "sphinx": "Mythical creature with a lion's body and a human head",
    "troll": "Large, ugly creature often found in folklore",
    "vampire": "Undead creature that feeds on blood",
    "werewolf": "Human capable of transforming into a wolf",
    "witch": "Magic practitioner, typically female",
    "warlock": "Male witch",
    "yeti": "Large, ape-like creature said to inhabit the Himalayas",
    "mermaid": "Half-human, half-fish creature",
    "dragon": "Legendary reptilian creature with wings and fire breath",
    "wyvern": "Dragon-like creature with two legs and wings",
    "elf": "Mythical creature with pointed ears and magical abilities",
    "dwarf": "Short, stocky humanoid creature from folklore",
    "gnome": "Small humanoid creature that lives underground",
    "leprechaun": "Irish fairy often depicted as a small old man",
    "pixie": "Small, mischievous fairy",
    "unicorn": "Legendary horse with a single horn",
    "lochness": "Famous Scottish lake monster",
    "apprentice": "Student learning a trade",
    "alchemy": "Medieval science of turning metals into gold",
    "beowulf": "Heroic epic poem",
    "goblin": "Small, mischievous creature",
    "shapeshifter": "Being able to change form",
    "talisman": "Object believed to have magical powers",
    "potion": "Liquid with magical properties",
    "wizard": "Magic practitioner",
    "sorcerer": "Wizard with innate magical abilities",
    "enchantress": "Female sorcerer",
    "centaur": "Half-human, half-horse creature",
    "fairy": "Mythical being with magical powers",
    "giant": "Enormous humanoid creature",
    "hobbit": "Small, human-like creature from Middle-earth",
    "ogre": "Large, brutish humanoid creature",
    "phoenix": "Mythical bird that rises from its own ashes",
    "sphinx": "Mythical creature with a lion's body and a human head",
    "troll": "Large, ugly creature often found in folklore",
    "vampire": "Undead creature that feeds on blood",
    "werewolf": "Human capable of transforming into a wolf",
    "witch": "Magic practitioner, typically female",
    "warlock": "Male witch",
    "yeti": "Large, ape-like creature said to inhabit the Himalayas",
    "mermaid": "Half-human, half-fish creature",
    "dragon": "Legendary reptilian creature with wings and fire breath",
    "wyvern": "Dragon-like creature with two legs and wings",
    "elf": "Mythical creature with pointed ears and magical abilities",
    "dwarf": "Short, stocky humanoid creature from folklore",
    "gnome": "Small humanoid creature that lives underground",
    "leprechaun": "Irish fairy often depicted as a small old man",
    "pixie": "Small, mischievous fairy",
    "oracle": "Person who can see the future",
    "crystal ball": "Tool used for divination",
    "tarot cards": "Deck of cards used for fortune-telling",
    "runes": "Ancient alphabetic script used by Germanic peoples",
    "palm reading": "Fortune-telling method based on the lines of the hand",
    "tea leaves": "Reading patterns formed by tea leaves in a cup",
    "astrology": "Study of the movements and relative positions of celestial bodies",
    "numerology": "Belief in a mystical relationship between numbers and events",
    "psychic": "Person claiming to have extrasensory perception",
    "clairvoyant": "Person who claims to have the ability to see the future",
    "medium": "Person believed to communicate with the spirits of the dead",
    "witchcraft": "Practice of magic, especially black magic",
    "voodoo": "Religious cult practiced in the Caribbean and southern United States",
    "hoodoo": "African American folk magic",
    "alchemy": "Medieval science of turning metals into gold",
    "crystal healing": "Alternative medicine technique that uses crystals and gemstones",
    "feng shui": "Chinese practice of arranging the environment to create harmony",
    "herbalism": "Study of the therapeutic use of plants",
    "hypnosis": "Trance-like state in which a person is highly responsive to suggestion",
    "meditation": "Practice of focusing the mind to achieve a mentally clear and emotionally calm state",
    "reiki": "Japanese technique for stress reduction and relaxation that also promotes healing",
    "witchcraft": "Practice of magic, especially black magic",
    "voodoo": "Religious cult practiced in the Caribbean and southern United States",
    "hoodoo": "African American folk magic",
    "alchemy": "Medieval science of turning metals into gold",
    "crystal healing": "Alternative medicine technique that uses crystals and gemstones",
    "feng shui": "Chinese practice of arranging the environment to create harmony",
    "herbalism": "Study of the therapeutic use of plants",
    "hypnosis": "Trance-like state in which a person is highly responsive to suggestion",
    "meditation": "Practice of focusing the mind to achieve a mentally clear and emotionally calm state",
    "reiki": "Japanese technique for stress reduction and relaxation that also promotes healing",
    "apple": "Fruit that keeps the doctor away",
    "banana": "Yellow fruit with a peel",
    "orange": "Citrus fruit with a tough outer layer",
    "strawberry": "Small, red fruit with seeds on the outside",
    "watermelon": "Large fruit with a green rind and pink flesh",
    "grape": "Small fruit often used to make wine",
    "blueberry": "Small, round fruit that is blue in color",
    "pineapple": "Tropical fruit with a spiky outer layer",
    "kiwi": "Small, brown fruit with green flesh and black seeds",
    "mango": "Tropical fruit with a sweet and juicy flesh",
    "peach": "Fuzzy fruit with a pit in the middle",
    "pear": "Fruit with a narrow top and wider bottom",
    "cherry": "Small, round fruit that is typically red",
    "apricot": "Small, orange fruit with a smooth skin",
    "plum": "Small, round fruit with a pit in the middle",
    "coconut": "Large fruit with a hard, brown shell and white flesh",
    "raspberry": "Small fruit that comes in red, black, or golden varieties",
    "blackberry": "Small fruit with a dark purple color and many small seeds",
    "cranberry": "Small, red fruit often used in sauces and juice",
    "pomegranate": "Fruit with a tough outer layer and many seeds inside",
    "fig": "Small, pear-shaped fruit with a sweet flesh and many seeds",
    "lemon": "Citrus fruit with a sour taste",
    "lime": "Small, green citrus fruit with a sour taste",
    "avocado": "Fruit with a green outer layer and a large pit inside",
    "dragon fruit": "Tropical fruit with a pink or yellow skin and white or red flesh",
    "guava": "Tropical fruit with a sweet and tangy flavor",
    "papaya": "Tropical fruit with orange flesh and black seeds",
    "persimmon": "Orange fruit with a sweet and tangy flavor",
    "star fruit": "Yellow or green fruit with a star-shaped cross-section",
    "passion fruit": "Tropical fruit with a tough outer layer and juicy, seed-filled center",
    "lychee": "Small fruit with a red, rough outer layer and sweet, white flesh",
    "kiwano": "African fruit with orange skin and green, jelly-like flesh",
    "durian": "Large fruit with a strong odor and a custard-like flesh",
    "jackfruit": "Large fruit with a spiky outer layer and sweet, yellow flesh",
    "rambutan": "Tropical fruit with a red, hairy outer layer and sweet, white flesh",
    "sapodilla": "Tropical fruit with brown skin and sweet, grainy flesh",
    "plantain": "Large, green fruit similar to a banana but less sweet",
    "horned melon": "Fruit with a spiky, yellow skin and green, jelly-like flesh",
    "breadfruit": "Tropical fruit with a starchy flesh and green, bumpy skin",
    "custard apple": "Tropical fruit with a bumpy, green skin and creamy, sweet flesh",
    "ugg boots": "Australian sheepskin boots",
    "tim tam": "Australian chocolate biscuit",
    "aussie rules": "Football code played in Australia",
    "kangaroo": "Australian marsupial",
    "didgeridoo": "Australian Aboriginal wind instrument",
    "boomerang": "Curved throwing stick",
    "vegemite": "Dark brown Australian food spread",
    "koala": "Australian marsupial",
    "emu": "Australian flightless bird",
    "gumtree": "Australian eucalyptus tree",
    "wombat": "Australian marsupial",
    "kookaburra": "Australian bird known for its laugh",
    "wallaby": "Australian marsupial similar to a kangaroo but smaller",
    "barbecue": "Outdoor cooking device",
    "tinnie": "Australian slang for a can of beer",
    "ute": "Australian utility vehicle",
    "esky": "Australian cooler box",
    "stubbie": "Australian slang for a small beer bottle",
    "swag": "Australian bedroll",
    "billabong": "Australian term for a stagnant pool of water",
    "bush tucker": "Australian term for food gathered from the wilderness",
    "billy": "Australian term for a metal container used for boiling water over a campfire",
    "drop bear": "Australian mythical creature said to drop from trees onto unsuspecting victims",
    "sheila": "Australian slang for a woman",
    "dag": "Australian slang for a funny or eccentric person",
    "dunny": "Australian slang for an outdoor toilet",
    "fair dinkum": "Australian slang for genuine or true",
    "cobber": "Australian slang for a friend",
    "yobbo": "Australian slang for a rude or uncouth person",
    "g'day": "Australian greeting",
    "larrikin": "Australian slang for a mischievous person",
    "jumbuck": "Australian slang for a sheep",
    "skippy": "Australian nickname for a kangaroo",
    "strewth": "Australian expression of surprise",
    "barramundi": "Australian fish species",
    "shrimp on the barbie": "Australian term for grilled prawns",
    "yabby": "Australian term for a freshwater crayfish",
    "bushfire": "Australian term for a wildfire",
    "swimming hole": "Natural pool of water suitable for swimming",
    "bushwalking": "Australian term for hiking or backpacking",
    "beach cricket": "Informal cricket game played on the beach",
    "thongs": "Australian slang for flip-flops",
    "bush poetry": "Australian form of poetry often performed in a rhyming, rhythmic style",
    "bush ballad": "Australian narrative song",
    "democratically elected": "Chosen by popular vote",
    "monarchy": "Government with a hereditary ruler",
    "dictatorship": "Government ruled by one person with absolute power",
    "republic": "State in which supreme power is held by the people and their elected representatives",
    "parliamentary democracy": "System of government in which citizens elect representatives to a parliament to make laws on their behalf",
    "authoritarian regime": "Government that concentrates political power in an authority not responsible to the people",
    "communist state": "State controlled and planned by a single political party",
    "federal republic": "Union of states with a central authority but independence in internal affairs",
    "constitutional monarchy": "Monarchy in which governing powers of the monarch are restricted by a constitution",
    "oligarchy": "Government in which a small group exercises control",
    "theocracy": "Government in which religious leaders hold political power",
    "totalitarian state": "Government that regulates every aspect of public and private life",
    "absolute monarchy": "Monarchy in which the monarch holds supreme authority and is not restricted by a constitution",
    "fascist regime": "Authoritarian government characterized by dictatorial power, forcible suppression of opposition, and strong regimentation of society and the economy",
    "unitary state": "State governed as a single power in which the central government is ultimately supreme",
    "autocracy": "Government in which one person has unlimited power",
    "socialist state": "State advocating for collective ownership and administration of the means of production and distribution of goods",
    "capitalist democracy": "System in which a country's trade and industry are controlled by private owners for profit, and citizens elect representatives to a parliament",
    "aristocracy": "Government in which power is held by the nobility",
    "plutocracy": "Government in which wealthy individuals control the state",
    "anarchy": "Absence of government and absolute freedom of the individual",
    "matriarchy": "Social system in which women hold the primary power and predominate in roles of political leadership",
    "patriarchy": "Social system in which men hold primary power and predominate in roles of political leadership",
    "geniocracy": "System of government in which the rulers are chosen based on their intellectual capabilities",
    "federalism": "System of government in which power is divided between a central authority and constituent political units",
    "meritocracy": "System in which economic goods and/or political power are vested in individual people on the basis of talent, effort, and achievement",
    "nomocracy": "Government according to a system of law in which the laws are known or understood by the citizens",
    "neoliberalism": "Political philosophy advocating economic liberalization, free trade, and open markets",
    "globalism": "Policy of treating the whole world as a proper sphere for political influence",
    "nationalism": "Ideology promoting the interests and culture of one nation above all others",
    "populism": "Political approach that seeks to appeal to ordinary people who feel that their concerns are disregarded by established elite groups",
    "isolationism": "Policy of remaining apart from the affairs or interests of other groups, especially the political affairs of other countries",
    "conservatism": "Political philosophy promoting traditional social institutions",
    "liberalism": "Political philosophy founded on ideas of liberty and equality",
    "socialism": "Political and economic theory advocating for the collective ownership and control of production and distribution of goods",
    "communism": "Political theory advocating class war and leading to a society in which all property is publicly owned and each person works and is paid according to their abilities and needs",
    "fascism": "Extreme authoritarian, nationalistic, and dictatorial right-wing system of government and social organization",
    "anarchism": "Belief in the abolition of all government and the organization of society on a voluntary, cooperative basis without recourse to force or compulsion",
    "capitalism": "Economic and political system in which a country's trade and industry are controlled by private owners for profit, rather than by the state",
    "democracy": "System of government by the whole population or all the eligible members of a state, typically through elected representatives",
    "dictatorship": "Government ruled by one person with absolute power",
    "monarchy": "Government with a hereditary ruler",
    "oligarchy": "Government in which a small group exercises control",
    "republic": "State in which supreme power is held by the people and their elected representatives",
    "theocracy": "Government in which religious leaders hold political power",
    "totalitarianism": "Government that regulates every aspect of public and private life",
    "autocracy": "Government in which one person has unlimited power",
    "socialism": "Political and economic theory advocating for the collective ownership and control of production and distribution of goods",
    "capitalism": "Economic and political system in which a country's trade and industry are controlled by private owners for profit, rather than by the state",
    "anarchism": "Belief in the abolition of all government and the organization of society on a voluntary, cooperative basis without recourse to force or compulsion",
    "communism": "Political theory advocating class war and leading to a society in which all property is publicly owned and each person works and is paid according to their abilities and needs",
    "fascism": "Extreme authoritarian, nationalistic, and dictatorial right-wing system of government and social organization",
    "liberalism": "Political philosophy founded on ideas of liberty and equality",
    "conservatism": "Political philosophy promoting traditional social institutions",
    "globalism": "Policy of treating the whole world as a proper sphere for political influence",
    "nationalism": "Ideology promoting the interests and culture of one nation above all others",
    "isolationism": "Policy of remaining apart from the affairs or interests of other groups, especially the political affairs of other countries",
    "populism": "Political approach that seeks to appeal to ordinary people who feel that their concerns are disregarded by established elite groups",
    "neoliberalism": "Political philosophy advocating economic liberalization, free trade, and open markets",
    "anarchism": "Belief in the abolition of all government and the organization of society on a voluntary, cooperative basis without recourse to force or compulsion",
    "aristocracy": "Government in which power is held by the nobility",
    "autocracy": "Government in which one person has unlimited power",
    "capitalism": "Economic and political system in which a country's trade and industry are controlled by private owners for profit, rather than by the state",
    "communism": "Political theory advocating class war and leading to a society in which all property is publicly owned and each person works and is paid according to their abilities and needs",
    "conservatism": "Political philosophy promoting traditional social institutions",
    "democracy": "System of government by the whole population or all the eligible members of a state, typically through elected representatives",
    "dictatorship": "Government ruled by one person with absolute power",
    "fascism": "Extreme authoritarian, nationalistic, and dictatorial right-wing system of government and social organization",
    "globalism": "Policy of treating the whole world as a proper sphere for political influence",
    "isolationism": "Policy of remaining apart from the affairs or interests of other groups, especially the political affairs of other countries",
    "liberalism": "Political philosophy founded on ideas of liberty and equality",
    "nationalism": "Ideology promoting the interests and culture of one nation above all others",
    "neoliberalism": "Political philosophy advocating economic liberalization, free trade, and open markets",
    "oligarchy": "Government in which a small group exercises control",
    "populism": "Political approach that seeks to appeal to ordinary people who feel that their concerns are disregarded by established elite groups",
    "socialism": "Political and economic theory advocating for the collective ownership and control of production and distribution of goods",
    "theocracy": "Government in which religious leaders hold political power",
    "totalitarianism": "Government that regulates every aspect of public and private life",
    "anarchism": "Belief in the abolition of all government and the organization of society on a voluntary, cooperative basis without recourse to force or compulsion"
};

let chosenCategory = null;
let chosenWord = null;
let chosenClue = null;
let guessedLetters = [];
let hangmanWord = '';
let totalLives = 6;
let score = 0;

function initializeHangman() {
    showCategorySelection();
}

console.log(chosenCategory);
console.log(clues[chosenCategory]);
console.log(index);

function showCategorySelection() {
    const categorySelectionDiv = document.createElement('div');
    categorySelectionDiv.id = 'category-selection';
    categorySelectionDiv.innerHTML = '<h2>Select a Category:</h2>';
    
    for (const category in categories) {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', function() {
            chosenCategory = category;
            const index = Math.floor(Math.random() * categories[chosenCategory].length);
            chosenWord = categories[chosenCategory][index];
            chosenClue = clues[chosenCategory][index];
            document.getElementById('category-selection').remove();
            startGame();
            updateHangmanWord(); // Call updateHangmanWord() here
          startGame();
        });
        categorySelectionDiv.appendChild(categoryButton);
    }
    
    document.getElementById('hangman-container').appendChild(categorySelectionDiv);
}



function startGame() {
    document.getElementById('hangman-container').innerHTML = '';
    const gameContainer = document.createElement('div');
    gameContainer.innerHTML = `
        <div id="category">Category: ${chosenCategory}</div>
        <div id="clue">Clue: ${chosenClue}</div>
        <div id="hangman-word"></div>
        <div id="hangman-image">
            <img src="hangman0.png" alt="Hangman" id="hangman-img">
        </div>
        <div id="total-lives">Total Lives: ${totalLives}</div>
        <div id="score">Score: ${score}</div>
        <div id="hangman-buttons"></div>
        <div id="hangman-status"></div>
    `;
    
    document.getElementById('hangman-container').appendChild(gameContainer);
    
    for (let i = 0; i < chosenWord.length; i++) {
        hangmanWord += '_';
    }
    document.getElementById('hangman-word').textContent = hangmanWord;
    renderButtons();
}

function renderButtons() {
    const buttonsContainer = document.getElementById('hangman-buttons');
    buttonsContainer.innerHTML = '';
    for (let i = 97; i <= 122; i++) { // ASCII codes for lowercase letters
        const letter = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', function() {
        handleGuess(letter);
        });
        buttonsContainer.appendChild(button);
    }
    updateHangmanWord(); // Add this line to ensure hangman word is properly displayed after selecting category
    
}

function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) {
            totalLives--;
            updateHangmanImage();
        }
        updateHangmanWord();
        renderButtons();
        checkGameStatus();
    }
}

function updateHangmanWord() {
    let newHangmanWord = '';
    if (!hangmanWord) {
        for (let i = 0; i < chosenWord.length; i++) {
            newHangmanWord += '_ ';
        }
        hangmanWord = newHangmanWord.trim();
    } else {
        for (let i = 0; i < chosenWord.length; i++) {
            if (guessedLetters.includes(chosenWord[i])) {
                newHangmanWord += chosenWord[i] + ' ';
            } else {
                newHangmanWord += '_ ';
            }
        }
        hangmanWord = newHangmanWord.trim(); // Trim to remove trailing space
    }
    document.getElementById('hangman-word').textContent = hangmanWord;
}

function checkGameStatus() {
    if (hangmanWord === chosenWord) {
        document.getElementById('hangman-status').textContent = 'You won!';
        score += 10;
        document.getElementById('score').textContent = `Score: ${score}`;
        setTimeout(() => {
            showCategorySelection();
        }, 2000);
    } else if (totalLives === 0) {
        document.getElementById('hangman-status').textContent = 'You lost!';
        document.getElementById('hangman-img').src = 'Hanged.jpg'; // Image for losing
    }
}


initializeHangman();
