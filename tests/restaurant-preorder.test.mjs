import assert from "node:assert/strict";
import test from "node:test";
import { buildWhatsAppOrderUrl, restaurant } from "../src/data/restaurant.ts";

test("every menu item has at least one pre-order option", () => {
  assert.ok(restaurant.menu.every((dish) => dish.preOrderLinks?.length > 0));
});

test("the first dish has the two requested garang asem links", () => {
  assert.deepEqual(
    restaurant.menu[0].preOrderLinks?.map((option) => option.label),
    ["PO Garang asem ayam kampung", "PO garang asam ayam negeri"],
  );
});

test("pre-order links target WhatsApp with the restaurant number and a prefilled message", () => {
  const message = restaurant.menu[0].preOrderLinks[0].message;
  const link = new URL(buildWhatsAppOrderUrl(message));

  assert.equal(link.origin, "https://wa.me");
  assert.equal(link.pathname, `/${restaurant.whatsappNumber}`);
  assert.equal(link.searchParams.get("text"), message);
});
