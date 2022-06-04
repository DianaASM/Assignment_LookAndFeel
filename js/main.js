
function updateFish(val)
{
    var sb = document.getElementById('fish');
    var nIndex = sb.selectedIndex + val;
    if (nIndex < 0 || nIndex >= sb.length)
    {
        nIndex = 0;
    }
    sb.selectedIndex = nIndex;
    switch (sb.selectedIndex)
    {
        case 0:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Very hardy, easy to keep";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Amphiprioninae";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 20 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/ocellaris-clownfish.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Clownfish are endemic to the warmer waters of the India Ocean. They typically live at the bottom of shallow seas in sheltered reefs or in shallow lagoons.";
            document.getElementById('AdditionalInfo').src = "Additional Info: Clownfish are endemic to the warmer waters of the India Ocean. They typically live at the bottom of shallow seas in sheltered reefs or in shallow lagoons.	It is also known as anemonefish because they form a symbiotic mutualism with sea anemones. There are 6 mains species based on their features: Complexes, percula, tomato, skunk, clarkii, saddleback and maroon. Maroon can become aggressive in an aquarium. When a sea anemone is not available in an aquarium, the anemonefish may settle in some varieties of soft corals or large polyp stony corals.";
            break;
        case 1:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Very hardy, comes in lots of colors";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Chrysiptera";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/yellowtail-damselfish.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Many species live in tropical rocky or coral reefs. Most damselfish species exist only in marine environment but a few inhabita brackish or fressh waters.";
            document.getElementById('AdditionalInfo').src = "Additional Info: Damselfish are those within the subfamilies Abudefdufunae, Chrominae, Lepidozyginae, Pomacentrinae, and Stegastanae within the family Pmacentridae. They can be aggressive and very territorial. They exhibit filial Cannibalism consuming over 25% of its clutches.";
            break;
        case 2:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy, colorful, like to school";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Chromis Viridis";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/green-chromis.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: The species are found in warm, tropical and subtropical waters.  They live in coral reefs and lagoons.";
            document.getElementById('AdditionalInfo').src = "Additional Info: Chromis is a species of damselfish and tend to be iridescen apple-green and light blue. It is not recommended to house green chromis with larger predatory fishe as they may become food themselves..";
            break;
        case 3:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Peaceful, hardy, inexpensive";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Ecsenius bicolor";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Herbivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/bicolor-blenny-1.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Blennies are reclusive spending much of their time on or near the sea floor ir unhabit crevices in reefs, the lower stretches of rivers or even empty mollusk shells.";
            document.getElementById('AdditionalInfo').src = "Additional Info: Bicolor Blenny are part of the Blenny family. Bleenies demonstrate mimicry of other species.";
            break;
        case 4:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy, comes in many colors";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Gobiodon";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 10 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet:  Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament:  Peaceful";
            document.getElementById('fishImage').src = "./img/yellow-clown-goby-1.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Native to the reefs of the Indo-Pacific, Gobiodon Okinawa usually congregates among soft and hard coral colonies.";
            document.getElementById('AdditionalInfo').src = "Additional Info: Given their small size, their diet consists mainly of mesoplankton. They are opportunistic feeders, not hunters. Because of territorial issues with their own kind in the small confines of a tank, they are best kept singly or as a breeding pair.";
            break;
        case 5:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Cryptocentrus cinctus";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/yellow-watchman-goby-1.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Gobby can be found at depths of from 1 to 25 metres (3.3 to 82.0 ft) in coastal bays and lagoons.";
            document.getElementById('AdditionalInfo').src = "Additional Info: It is also known as Yellow Prawn-gobby. It is often kept in salt water aquariums. This species is symbiotic with alpheid shrimps. And are often partnered with Tiger pistol shrimp.";
            break;
        case 6:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, doesn't need a big tank";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Nemateleotris Magnifica";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 20 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/firefish-goby-1.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Native to the Indian and Pacific oceans, it is an inhabitant of coral reefs..";
            document.getElementById('AdditionalInfo').src = "Additional Info: Growing in aquaria, they should be fed two times per day. They are considered reef safe and are peaceful and sociable. They will also make schools if many are put into a tank.";
            break;
        case 7:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, doesn't need a big tank";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Cirrhitidae";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Aggressive";
            document.getElementById('fishImage').src = "./img/hawkfish-1.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Hawkfishes are found in the tropical western and eastern Atlantic, Indian and Pacific. They are benthic fishes which are found on coral reefs and rocky substrates, mostly inhabiting shallow water.";
            document.getElementById('AdditionalInfo').src = "Additional Info: Hawkfishes are a family of ray-finned fishes. Since these are too small in an aquarium are use mainly for food fish.";
            break;
        case 8:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, cleans sand";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Valenciennea puellaris";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/diamond-goby-2.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Diamond Gobby are found in the Indo-Pacific, Red Sea, Samoa, Great Barrier Reef - or in the sand bottom near reefs at depths of 2 - 30 meters (6 - 100 feet).";
            document.getElementById('AdditionalInfo').src = "Additional Info: It is also known as Maiden Goby or the Orange Spotted Sleeper Goby. They are often found in pairs that are thought to be monogamous. A large live sand bed is very important since these gobies rely on it for food.";
            break;
        case 9:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Pseudocheilinus hexataenia";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 55 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/six-line-wrasse-2.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: The six-line wrasse inhabit the branches of corals on seaward reef, it is also found in clear coastal waters and in areas of dense coral growth on the crests of reefs in shallow water or on the slopes.";
            document.getElementById('AdditionalInfo').src = "Additional Info: This is a secretive and shy species which is normally encountered in small, loose groups swimming among the branches of corals for protection. It feeds mainly on small crustaceans. This is a diurnal species which takes shelter in cavities where it creates a mucus cocoon in which to sleep during the night, it is thought that this cocoon helps protect it from nocturnal predators by masking the scent of the sleeping fish.";
            break;
        case 10:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Inexpensive, hardy";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Gramma loreto";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Peaceful";
            document.getElementById('fishImage').src = "./img/royal-gramma-1.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Their natural range covers the Bahamas, Venezuela, Antilles, Bermuda, and through the waters surrounding Central America and the northern part of South America.";
            document.getElementById('AdditionalInfo').src = "Additional Info: It is also known as fairy basslet and it is a species in the family Grammaitidae. They are generally peaceful fish, but are very protective of their territories and are known for chasing out other small fish. The royal gramma should not be kept with its own kind unless in a formed male-female pair. It should also not be kept with larger, aggressive fish that will eat them. They are, however, resistant to most diseases and make very good beginner fish. It will also accept frozen and meaty foods, such as brine shrimp and mysis shrimp in the wild. The royal gramma is very easy to feed; but rotating their foods is said to keep them from becoming picky. Captive royal gramma will also eat flake and pellet foods.";
            break;
        case 11:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Centropyge bispinosa";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 70 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Omnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/coral-beauty-angelfish-2.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: The Coral Beauty angelfish is found at depths of 5 to 50 meters (16 to 164 ft.) in coral reefs within lagoons, rubble patches and drop offs, being commonest around drop offs. They are mostly found in the Indo-Pacific.";
            document.getElementById('AdditionalInfo').src = "Additional Info: Also known as Twospined anglefish or dusky anglefish is a member of the Pomacanthidae family. They live in small social groups consisting of a single male and a few females. They are protogynous hermaphrodites and the most dominant of the females in a group will change sex to become male if the existing male dies or disappears. This species feeds on algae and detritus.";
            break;
        case 12:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Hardy, comes in different colors";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Pseudochromidae";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/bicolor-dottyback-2.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: They are found in the tropical and subtropical Indo-Pacific, where most inhabit coral reefs.";
            document.getElementById('AdditionalInfo').src = "Additional Info: The dottybacks are a family Pseudochromidae . Many species are brightly coloured fish, often showing striking sexual dimorphism. They are aggressibely territorial.";
            break;
        case 13:
            document.getElementById('quickInfo').innerHTML = "Quick Info: Small, hardy, colorful";
            document.getElementById('scientificInfo').innerHTML = "Scientific Name: Serranus tortugarum";
            document.getElementById('tankInfo').innerHTML = "Minimum Tank Size: 30 gallons";
            document.getElementById('dietInfo').innerHTML = "Diet: Carnivore";
            document.getElementById('temperamentInfo').innerHTML = "Temperament: Semi-aggressive";
            document.getElementById('fishImage').src = "./img/chalk-bass-1.jpg";
            document.getElementById('Habitat').innerHTML = "Habitat: Serranus tortugarum is found over substrates of rock, silt or sand at depths of 2 to 400 meters (6.6 to 1,312.3 ft.), although it is normally found at depths of less than 90 metres (300 ft.).";
            document.getElementById('AdditionalInfo').src = "Additional Info: Chak sea bass belongs to subfamily Serraninae. This is a social species. It is also a synchronously hermaphrodite. Chalk bass feed on zooplankton, although larger fish have been recorded feeding on more sizeable crustaceans which they swallowed whole.";
            break;
       
    }
}

function updateCoral(val) {
    var sb = document.getElementById('coral');
    var nIndex = sb.selectedIndex + val;
    if (nIndex < 0 || nIndex >= sb.length) {
        nIndex = 0;
    }
    sb.selectedIndex = nIndex;
    switch (sb.selectedIndex) {
        case 0:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/4\" - 2\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/zoa.jpg";
            break;
        case 1:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/4\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Low to Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food";
            document.getElementById('coralImage').src = "./img/mushroom.jpg";
            break;
        case 2:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 10\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Phytoplankton";
            document.getElementById('coralImage').src = "./img/toadstool.jpg";
            break;
        case 3:
            document.getElementById('sizeInfo').innerHTML = "Size: 2\" - 7\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food, Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/kenyatree.jpg";
            break;
        case 4:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 4\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Low to Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/xenia.jpg";
            break;
        case 5:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 1\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/gsp.jpg";
            break;
        case 6:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food";
            document.getElementById('coralImage').src = "./img/frogspawn.jpg";
            break;
        case 7:
            document.getElementById('sizeInfo').innerHTML = "Size: 2\" - 8\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Low to Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food";
            document.getElementById('coralImage').src = "./img/bubble.jpg";
            break;
        case 8:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/candycane.jpg";
            break;
        case 9:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 3\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Low to Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food";
            document.getElementById('coralImage').src = "./img/blasto.jpg";
            break;
        case 10:
            document.getElementById('sizeInfo').innerHTML = "Size: 1\" - 7\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton";
            document.getElementById('coralImage').src = "./img/brain.jpg";
            break;
        case 11:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 2\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Bottom to Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Zooplankton";
            document.getElementById('coralImage').src = "./img/ricordia.jpg";
            break;
        case 12:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 2\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating fish/coral food";
            document.getElementById('coralImage').src = "./img/duncans.jpg";
            break;
        case 13:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 8\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food, Zooplankton and Phytoplankton";
            document.getElementById('coralImage').src = "./img/birdnest.jpg";
            break;
		case 14:
            document.getElementById('sizeInfo').innerHTML = "Size: 1/2\" - 12\"";
            document.getElementById('placementInfo').innerHTML = "Placement: Middle to Top of Tank";
            document.getElementById('lightingInfo').innerHTML = "Lighting: Moderate to High";
            document.getElementById('flowInfo').innerHTML = "Flow: Moderate to High";
            document.getElementById('dietInfo').innerHTML = "Diet: Primary - Photosynthesis, Supplemental - Free floating coral food";
            document.getElementById('coralImage').src = "./img/montipora.jpg";
            break;
    }
}
