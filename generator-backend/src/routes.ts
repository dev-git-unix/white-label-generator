import { Router } from 'express';

const router = Router();

// Health
router.get('/health', (_req, res) => res.json({ ok: true }));

// Stub endpoints (we’ll implement in later steps)
router.post('/validate-assets', (_req, res) => {
  res.json({ ok: true, validations: [] });
});

router.post('/generate', (_req, res) => {
  // Will receive multipart (config + logo/favicon), copy template, replace placeholders, zip, stream
  res.status(501).json({ error: 'Not implemented yet' });
});

export default router;

