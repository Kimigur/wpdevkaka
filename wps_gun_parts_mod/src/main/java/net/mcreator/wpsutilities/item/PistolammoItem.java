
package net.mcreator.wpsutilities.item;

import net.minecraft.world.item.Rarity;
import net.minecraft.world.item.Item;

import net.mcreator.wpsutilities.init.WpsUtilitiesModTabs;

public class PistolammoItem extends Item {
	public PistolammoItem() {
		super(new Item.Properties().tab(WpsUtilitiesModTabs.TAB_WPS_UTILITIES).stacksTo(64).rarity(Rarity.COMMON));
	}
}