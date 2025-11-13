function getEffectImagePath(effectName) {
    return `img/effects/${effectName}.png`;
}

const giftsData = [
    {
        id: 1,
        name: "Hellterfly's Dream",
        price: "198",
        description: `When applying <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency or 'Unique Burn' to an enemy with <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> or 'Unique Burn', randomly inflict a total of 3 <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency between all enemies.<br><br>When activating Wrath Absolute Resonance, randomly inflict a total of 5 <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency between all enemies at Combat Start.`,
        sin: "wrath",
        tier: 2,
        keyword: "burn"
    },
    {
        id: 2,
        name: "Perversion",
        price: "157",
        description: `After defeating 1 or more enemy using an Attack Skill, gain +1 E.G.O resource of that Attack Skill's Affinity at the next Turn Start.<br><br>If the Attack Skill's Affinity was Wrath, gain +1 E.G.O resource of all affinities the ally has at the next Turn Start instead.`,
        sin: "wrath",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 3,
        name: "Ashes to Ashes",
        price: "148",
        description: `Combat Start: if all enemies (or all Abnormality parts) have <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> or 'Unique Burn', inflict 2 <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency on all enemies (or all Abnormality parts).`,
        sin: "wrath",
        tier: 1,
        keyword: "burn"
    },
    {
        id: 4,
        name: "Phlebotomy Pack",
        price: "142",
        description: `When hitting an enemy with a Skill, heal 12.5% of the character's missing HP. (Once per character per turn.)<br><br>If the Skill's Affinity was Wrath, heal 25% of missing HP instead.`,
        sin: "wrath",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 5,
        name: "Wound Clerid",
        price: "202",
        description: `When hitting an enemy with a Skill that inflicts <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency or 'Unique Bleed', inflict 4 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency.`,
        sin: "wrath",
        tier: 2,
        keyword: "bleed"
    },
    {
        id: 6,
        name: "Coffee and Cranes",
        price: "186",
        description: `Turn Start: Gain +1 E.G.O resource of a random Affinity that does not correspond to any Attack Skill Affinity used last turn.<br><br>If a Lust Affinity Attack Skill was used last turn: Gain 1 of every Affinity E.G.O resource that does not correspond to any Attack Skill Affinity used last turn instead.`,
        sin: "lust",
        tier: 2,
        keyword: "keywordless"
    },
    {
        id: 7,
        name: "Eclipse of Scarlet Moths",
        price: "220",
        description: `Turn Start: When dealing damage with an Attack Skill for the first time, deal half its damage as fixed damage to a random enemy.<br><br>If the Attack Skill's Affinity was Lust, deal said damage to two random enemies instead.`,
        sin: "lust",
        tier: 2,
        keyword: "keywordless"
    },
    {
        id: 8,
        name: "Grimy Iron Stake",
        price: "147",
        description: `When hitting an enemy using a single-Coin skill, inflict 1 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency. Inflict 2 <img class="description-icon" src="${getEffectImagePath('defenseleveldown')}"> <span class="keyword-text">Defense Level Down</span> until the end of the next turn.<br>If the target already has <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> or 'Unique Bleed', inflict 3 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency instead.`,
        sin: "lust",
        tier: 1,
        keyword: "bleed"
    },
    {
        id: 9,
        name: "Fiery Down",
        price: "203",
        description: `When hitting an enemy with a Lust Affinity Skill or a Skill that inflicts <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency or 'Unique Burn', inflict 3 <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency.<br><br>Turn Start: If the enemy has 20+ <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency, (Current <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency on enemy) x2`,
        sin: "lust",
        tier: 2,
        keyword: "burn"
    },
    {
        id: 10,
        name: "Bloody Gadget",
        price: "163",
        description: `Turn Start: apply 2 <img class="description-icon" src="${getEffectImagePath('damageup')}"> <span class="positive-text">Damage Up</span> to a random ally.<br><br>Prioritizes allies with Lust Affinity Attack skills; apply 1 additional <img class="description-icon" src="${getEffectImagePath('damageup')}"> <span class="positive-text">Damage Up</span> to the said ally.`,
        sin: "lust",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 11,
        name: "Sunshower",
        price: "252",
        description: `When activating Sloth Absolute Resonance or using a Skill with 2+ Atk Weight:<br><br>All allies gain +2 Skill Power at Combat Start.`,
        sin: "sloth",
        tier: 3,
        keyword: "keywordless"
    },
    {
        id: 12,
        name: "Today's Expression",
        price: "189",
        description: `After defeating an enemy by using a Sloth Affinity or Blunt skill, raise the unit's Blunt Skill Power by 2 until the end of next turn.`,
        sin: "sloth",
        tier: 2,
        keyword: "blunt"
    },
    {
        id: 13,
        name: "Talisman Bundle",
        price: "143",
        description: `Whenever an ally deals 12+ HP damage to an enemy with a Skill, inflict 2 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency on target.<br><br>When using a Slash Skill, inflict 4 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency instead.`,
        sin: "sloth",
        tier: 1,
        keyword: "rupture"
    },
    {
        id: 14,
        name: "Rusty Commemorative Coin",
        price: "270",
        description: `If the first single-Coin Attack Skill that an ally uses during the combat phase doesn't defeat any enemies, use the Skill one more time.<br><br>After defeating an enemy by using a Sloth or single-Coin Skill, the ally gains +1 Skill Power for the next turn.`,
        sin: "sloth",
        tier: 3,
        keyword: "keywordless"
    },
    {
        id: 15,
        name: "Blood, Sweat, and Tears",
        price: "200",
        description: `Skills deal +10% damage to Staggered enemies.<br><br>If the Skill inflicts <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Potency, <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Count, triggers <img class="description-icon" src="${getEffectImagePath('amplitudeconversion')}"> <span class="neutral-text">Amplitude Conversion</span>, <img class="description-icon" src="${getEffectImagePath('tremorburst')}"> <span class="keyword-text">Tremor Burst</span>, or <img class="description-icon" src="${getEffectImagePath('amplitudeentanglement')}"> <span class="neutral-text">Amplitude Entanglement</span>, or if the Skill's Affinity was Sloth, deal +20% damage instead.`,
        sin: "sloth",
        tier: 2,
        keyword: "tremor"
    },
    {
        id: 16,
        name: "Green Spirit",
        price: "146",
        description: `After hitting a non-Staggered enemy by using a Gluttony Affinity Skill, or inflicting <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Potency using Skill effects, randomly inflict a total of 4 <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Potency between all enemies(or all Abnormality parts).`,
        sin: "gluttony",
        tier: 1,
        keyword: "tremor"
    },
    {
        id: 17,
        name: "Lithograph",
        price: "165",
        description: `Whenever an enemy is Staggered, the ally with the least HP heals 5% of their Max HP.<br><br>If said ally has Gluttony Affinity Attack Skills, heal 10% of Max HP instead.`,
        sin: "gluttony",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 18,
        name: "Crown of Roses",
        price: "144",
        description: `Turn Start: inflict 4 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency on a random enemy(or all Abnormality parts).<br><br>When activating Gluttony Absolute Resonance, inflict 2 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency on all enemies at Combat Start.`,
        sin: "gluttony",
        tier: 1,
        keyword: "rupture"
    },
    {
        id: 19,
        name: "Sticky Muck",
        price: "156",
        description: `When hitting an enemy with a Pierce Skill or a Gluttony Affinity Skill, inflict 2 <img class="description-icon" src="${getEffectImagePath('defenseleveldown')}"> <span class="keyword-text">Defense Level Down</span>.`,
        sin: "gluttony",
        tier: 1,
        keyword: "pierce"
    },
    {
        id: 20,
        name: "White Gossypium",
        price: "201",
        description: `Turn Start: If there are Staggered enemies, un-Stagger enemies. Then, inflict (8 + Stagger LV x 4) <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency and (8 + Stagger LV x4)/2 <img class="description-icon" src="${getEffectImagePath('offenseleveldown')}"> <span class="keyword-text">Offense Level Down</span> on them. (Activates once per enemy per Encounter. Does not activate against certain enemies that do not recover from Stagger)`,
        sin: "gluttony",
        tier: 2,
        keyword: "bleed"
    },
    {
        id: 21,
        name: "Blue Zippo Lighter",
        price: "163",
        description: `Turn Start: gain +1 Gloom E.G.O resource and +1 E.G.O resource of 2 other random Affinities.`,
        sin: "gloom",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 22,
        name: "Phantom Pain",
        price: "266",
        description: `Skills with 1 Atk Weight deal +15% damage.<br><br>When activating Gloom Absolute Resonance, apply 2 <img class="description-icon" src="${getEffectImagePath('offenselevelup')}"> <span class="positive-text">Offense Level Up</span> to all allies at Combat Start.`,
        sin: "gloom",
        tier: 3,
        keyword: "keywordless"
    },
    {
        id: 23,
        name: "Thunderbranch",
        price: "252",
        description: `When inflicting <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency with Skill effects, Inflict 1 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency and +1 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Count on target.`,
        sin: "gloom",
        tier: 3,
        keyword: "rupture"
    },
    {
        id: 24,
        name: "Melted Eyeball",
        price: "248",
        description: `Inflict 5 <img class="description-icon" src="${getEffectImagePath('offenseleveldown')}"> <span class="keyword-text">Offense Level Down</span> and 5 <img class="description-icon" src="${getEffectImagePath('defenseleveldown')}"> <span class="keyword-text">Defense Level Down</span> next turn against enemies affected by <img class="description-icon" src="${getEffectImagePath('tremorburst')}"> <span class="keyword-text">Tremor Burst</span>. (3 times per turn)`,
        sin: "gloom",
        tier: 3,
        keyword: "tremor"
    },
    {
        id: 25,
        name: "Grey Coat",
        price: "192",
        description: `When using a Skill with 2+ Atk Weight, increase its damage by 20%.<br><br>When hitting an enemy with a Skill with 2+ Atk Weight or a Gloom Affinity Skill, heal by 20% of the damage dealt.`,
        sin: "gloom",
        tier: 2,
        keyword: "keywordless"
    },
    {
        id: 26,
        name: "Late-bloomer's Tattoo",
        price: "183",
        description: `When hitting an enemy with a single-Coin Skill or a Pride Affinity Skill, gain 2 <img class="description-icon" src="${getEffectImagePath('offenselevelup')}"> <span class="positive-text">Offense Level Up</span> and 2 <img class="description-icon" src="${getEffectImagePath('defenselevelup')}"> <span class="positive-text">Defense Level Up</span> next turn. (Max 5)`,
        sin: "pride",
        tier: 2,
        keyword: "keywordless"
    },
    {
        id: 27,
        name: "Lowest Star",
        price: "185",
        description: `When hitting an enemy with a Blunt Skill or a Pride Affinity Skill, inflict 2 fixed SP damage on target.<br><br>Allies with less than 0 SP deal +10% damage.`,
        sin: "pride",
        tier: 2,
        keyword: "blunt"
    },
    {
        id: 28,
        name: "Prejudice",
        price: "152",
        description: `First Turn Start of an Encounter: the ally with the least HP heals 15% of their Max HP.<br><br>When activating Pride Absolute Resonance, the ally with the least HP heals 12.5% of their missing HP at Combat Start.`,
        sin: "pride",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 29,
        name: "Little and To-be-Naughty Plushie",
        price: "191",
        description: `Deal +10% damage against enemies with <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> at Combat Start<br><br>Take -20% damage from enemies with <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> or 'Unique Bleed' at Combat Start<br><br>Allies with Pride Affinity Attack Skills deal +20% damage against enemies with <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> or 'Unique Bleed' instead.<br><br>Allies with Pride Affinity Attack Skills take -30% damage from enemies with <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> or 'Unique Bleed' instead.`,
        sin: "pride",
        tier: 2,
        keyword: "bleed"
    },
    {
        id: 30,
        name: "Gathering Skulls",
        price: "194",
        description: `After defeating an enemy by using a Pride Affinity or Pierce damage Skill, raise the unit's Pierce Power by 2 for the next 2 turns.`,
        sin: "pride",
        tier: 2,
        keyword: "pierce"
    },
    {
        id: 31,
        name: "Nixie Divergence",
        price: "145",
        description: `First Turn Start of an Encounter: inflict 4 <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Potency and 4 <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Count to all enemies. (Or all Abnormality parts)<br><br>When hitting an enemy with an Envy Affinity Skill, inflict 2 <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Potency on target.`,
        sin: "envy",
        tier: 1,
        keyword: "tremor"
    },
    {
        id: 32,
        name: "Dreaming Electric Sheep",
        price: "198",
        description: `After defeating an enemy by using an Envy Affinity or Slash damage skill, raise the unit's Slash Skill Power by 2 for the next 2 turns.<br><br>When activating Envy Absolute Resonance, all allies gain 2 <img class="description-icon" src="${getEffectImagePath('offenselevelup')}"> <span class="positive-text">Offense Level Up</span> and 2 <img class="description-icon" src="${getEffectImagePath('defenselevelup')}"> <span class="positive-text">Defense Level Up</span> at Combat Start.`,
        sin: "envy",
        tier: 2,
        keyword: "slash"
    },
    {
        id: 33,
        name: "Standard-duty Battery",
        price: "269",
        description: `When hitting an enemy with a Skill, inflict 3 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency on target.<br><br>If the Skill's Affinity was Envy, inflict 5 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency on target instead.`,
        sin: "envy",
        tier: 3,
        keyword: "rupture"
    },
    {
        id: 34,
        name: "Pinpoint Logic Circuit",
        price: "204",
        description: `When hitting an enemy with an Envy Affinity Skill or a Skill that inflicts <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency or 'Unique Burn', inflict additional <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency by half the Skill's total Coins. (rounded up)`,
        sin: "envy",
        tier: 2,
        keyword: "burn"
    },
    {
        id: 35,
        name: "Voodoo Doll",
        price: "149",
        description: `Turn Start: deal 3 fixed Envy Affinity damage to all enemies.<br><br>Inflict 1 <img class="description-icon" src="${getEffectImagePath('powerdown')}"> <span class="keyword-text">Power Down</span> to enemies with 33% or less HP.`,
        sin: "envy",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 36,
        name: "Carmilla",
        price: "217",
        description: `At the start of a non-Focused Encounter, all enemies take fixed damage equal to 20% of their Max HP.`,
        sin: "wrath",
        tier: 2,
        keyword: "keywordless"
    },
    {
        id: 37,
        name: "Child within a Flask",
        price: "212",
        description: `Encounter Start: gain +1 E.G.O resource for every Sin Affinity.`,
        sin: "lust",
        tier: 2,
        keyword: "keywordless"
    },
    {
        id: 38,
        name: "Illusory Hunt",
        price: "264",
        description: `Focused Encounter Start: Apply 2 <img class="description-icon" src="${getEffectImagePath('damageup')}"> <span class="positive-text">Damage Up</span> to all allies.`,
        sin: "gloom",
        tier: 3,
        keyword: "keywordless"
    },
    {
        id: 39,
        name: "Homeward",
        price: "193",
        description: `Encounter Start: all participating allies heal 12% of their Max HP.`,
        sin: "gluttony",
        tier: 2,
        keyword: "keywordless"
    },
    {
        id: 40,
        name: "Tomorrow’s Fortune",
        price: "140",
        description: `Upgrade the first Encounter Reward Card to the highest tier it could spawn as.`,
        sin: "pride",
        tier: 1,
        keyword: "keywordless"
    },
    {
        id: 41,
        name: "Red Order",
        price: "188",
        description: `Whenever an ally inflicts <img class="description-icon" src="${getEffectImagePath('sinking')}"> <span class="keyword-text">Sinking</span> Potency, Count or 'Unique Sinking' on enemies with Skill Effects, the ally gains 1 'Offense Level' next turn. (Max 3)<br><br>Allies with Gloom or Wrath Affinity Attack Skills, upon inflicting <img class="description-icon" src="${getEffectImagePath('sinking')}"> <span class="keyword-text">Sinking</span> Potency or Count on enemies with Skill Effects, gain 2 'Offense Level' next turn instead. (Max 4)`,
        sin: "wrath",
        tier: 2,
        keyword: "sinking"
    },
    {
        id: 42,
        name: "Smokes and Wires",
        price: "261",
        description: `Against enemies, allies inflict x2 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency with Skill effects.<br><br>Turn End: enemies with <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> or 'Unique Bleed' lose 2 Speed next turn.`,
        sin: "wrath",
        tier: 3,
        keyword: "bleed"
    },
    {
        id: 43,
        name: "Employee Card",
        price: "195",
        description: `When activating Wrath Absolute Resonance or using a Skill that gains or applies <img class="description-icon" src="${getEffectImagePath('charge')}"> <span class="positive-text">Charge</span> Count or 'Unique Charge', all allies gain +3 <img class="description-icon" src="${getEffectImagePath('charge')}"> <span class="positive-text">Charge</span> Count at the next Turn Start. (Once per turn)`,
        sin: "wrath",
        tier: 2,
        keyword: "charge"
    },
    {
        id: 44,
        name: "Oscillating Bracelet",
        price: "208",
        description: `When hitting an enemy with a Skill, inflict 1 <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Potency next turn.<br><br>If the Skill's Affinity was Wrath, inflict 2 <img class="description-icon" src="${getEffectImagePath('tremor')}"> <span class="keyword-text">Tremor</span> Potency instead.`,
        sin: "wrath",
        tier: 2,
        keyword: "tremor"
    },
    {
        id: 45,
        name: "Glimpse of Flames",
        price: "379",
        description: `Turn End: consume half of <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Count on enemies with <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> to deal (<img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Potency x consumed <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Count) bonus Wrath damage. (can consume up to 5 <img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Count)<br><br>Targets lose (<img class="description-icon" src="${getEffectImagePath('burn')}"> <span class="keyword-text">Burn</span> Count consumed by Glimpse of Flames) Defense Levels for the next turn. (max 3)`,
        sin: "wrath",
        tier: 4,
        keyword: "burn"
    },
    {
        id: 46,
        name: "Cigarette Holder",
        price: "197",
        description: `Turn Start: allies with <img class="description-icon" src="${getEffectImagePath('poise')}"> <span class="positive-text">Poise</span> gain 1 <img class="description-icon" src="${getEffectImagePath('powerup')}"> <span class="positive-text">Power Up</span>.<br><br>Allies with 5+ <img class="description-icon" src="${getEffectImagePath('poise')}"> <span class="positive-text">Poise</span> Count gain 2 <img class="description-icon" src="${getEffectImagePath('powerup')}"> <span class="positive-text">Power Up</span> instead.`,
        sin: "lust",
        tier: 2,
        keyword: "poise"
    },
    {
        id: 47,
        name: "Barbed Lasso",
        price: "187",
        description: `Turn End: Inflict <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency on all enemies equal to their current Speed values.<br><br>When activating Lust Absolute Resonance, apply 3 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Potency and +3 <img class="description-icon" src="${getEffectImagePath('rupture')}"> <span class="keyword-text">Rupture</span> Count to a random enemy at Combat Start.`,
        sin: "lust",
        tier: 2,
        keyword: "rupture"
    },
    {
        id: 48,
        name: "Rusted Cutting Knife",
        price: "244",
        description: `When inflicting <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency or 'Unique Bleed' with Skill effects against non-Staggered enemies, inflict 1 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency and +1 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Count.<br><br>If the Skill's Affinity was Lust, inflict 3 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency and +1 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Count instead.`,
        sin: "lust",
        tier: 3,
        keyword: "bleed"
    },
    {
        id: 49,
        name: "Thorny Path",
        price: "160",
        description: `When hitting and dealing HP damage to an enemy with a Skill that inflicts <img class="description-icon" src="${getEffectImagePath('sinking')}"> <span class="keyword-text">Sinking</span> Potency or 'Unique Sinking', inflict 3 <img class="description-icon" src="${getEffectImagePath('sinking')}"> <span class="keyword-text">Sinking</span> Potency and +2 <img class="description-icon" src="${getEffectImagePath('sinking')}"> <span class="keyword-text">Sinking</span> Count at Turn End. (Once per enemy per turn)<br><br>When activating Gloom or Lust Absolute Resonance, inflict 2 <img class="description-icon" src="${getEffectImagePath('sinking')}"> <span class="keyword-text">Sinking</span> Potency and +3 <img class="description-icon" src="${getEffectImagePath('sinking')}"> <span class="keyword-text">Sinking</span> Count to all enemies(for Abnormalities, a random Part) at Combat Start.`,
        sin: "lust",
        tier: 1,
        keyword: "sinking"
    },
    {
        id: 50,
        name: "Red-stained Gossypium",
        price: "382",
        description: `First Turn Start of an Encounter: inflict 1 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency and +15 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Count to all enemies (or all Abnormality parts).<br><br>Turn Start: enemies with <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency lose (<img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency/3) 'Offense Level' and 'Defense Level' for the turn. (Maxes out at 30 <img class="description-icon" src="${getEffectImagePath('bleed')}"> <span class="keyword-text">Bleed</span> Potency stack)`,
        sin: "lust",
        tier: 4,
        keyword: "bleed"
    },
    {
        id: 51,
        name: "Stone Tomb",
        price: "196",
        description: `Allies gain 1.5x <img class="description-icon" src="${getEffectImagePath('poise')}"> <span class="positive-text">Poise</span> Potency from Skill effects.<br><br>When an ally defeats an enemy with a Sloth Affinity Skill, they gain 2 <img class="description-icon" src="${getEffectImagePath('poise')}"> <span class="positive-text">Poise</span> Potency and +2 <img class="description-icon" src="${getEffectImagePath('poise')}"> <span class="positive-text">Poise</span> Count at the next Turn Start. (Once per turn)`,
        sin: "sloth",
        tier: 2,
        keyword: "poise"
    }
];