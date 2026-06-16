export default function FooterComponent() {
  return (
    <div className="bg-surface-0 border-t border-border py-8 w-full flex items-center justify-center text-center px-6">
      <p className="text-sm text-text-muted">
        &copy; {new Date().getFullYear()} Code Crafters. Todos los derechos reservados.
      </p>
    </div>
  );
}
